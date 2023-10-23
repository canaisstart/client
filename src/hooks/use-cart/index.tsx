import { useQueryCourses, useQueryUserHasCourse } from 'graphql/queries/courses'
import { useQueryUserOrders } from 'graphql/queries/orders'
import { useSession } from 'next-auth/client'
import { useContext, createContext, useState, useEffect } from 'react'
import formatPrice from 'utils/format-price'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { cartMapper } from 'utils/mappers'

const CART_KEY = 'cartItems'

export type CartItem = {
  id: string
  img: string
  title: string
  price: string
  slug: string
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
  totalInCents: number
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  loading: boolean
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: 'R$0,00',
  totalInCents: 0,
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])
  const session = useSession()

  const userOrders = useQueryUserOrders({
    skip: !session[0]?.id as boolean,
    variables: {
      identifier: session[0]?.id as string
    }
  })

  useEffect(() => {
    const data = getStorageItem(CART_KEY) as string[]

    if (data) {
      // Filtrar os cursos que não estão nas userOrders
      const coursesNotInUserOrders = data.filter((courseId) => {
        const courseIdInUserOrders = userOrders.data?.orders.some((order) =>
            order.courses.some((course) => course.id === courseId) &&
            order.status === 'paid'
        )
        return !courseIdInUserOrders
      })

      setCartItems(coursesNotInUserOrders)
    }
  }, [userOrders])

  const { data, loading } = useQueryCourses({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems
      }
    }
  })

  const total = data?.courses?.reduce((acc, course) => {
    const price = course?.price || 0
    return acc + price
  }, 0)

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false)

  const saveCart = (cartItems: string[]) => {
    setCartItems(cartItems)
    setStorageItem(CART_KEY, cartItems)
  }

  const addToCart = (id: string) => {
    saveCart([...cartItems, id])
  }

  const removeFromCart = (id: string) => {
    const newCartItems = cartItems.filter((itemId: string) => itemId !== id)
    saveCart(newCartItems)
  }

  const clearCart = () => {
    saveCart([])
  }

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.courses),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        totalInCents: total || 0,
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading: loading && userOrders.loading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
