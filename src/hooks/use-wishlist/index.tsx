import { useApolloClient, useMutation } from '@apollo/client'
import { CourseCardProps } from 'components/CourseCard'
import { CourseFragment } from 'graphql/fragments/course'
import {
  QueryWishlist,
  QueryWishlist_wishlists_courses
} from 'graphql/generated/QueryWishlist'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'
import { QUERY_WISHLIST, useQueryWishlist } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/client'
import { useMemo } from 'react'
import { useState } from 'react'
import { createContext, useContext, useEffect } from 'react'
import { getImageUrl } from 'utils/getImageUrl'

export type WishlistContextData = {
  items: CourseCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()
  const [wishlistId, setWishlistId] = useState<string | null>()
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlist_wishlists_courses[]
  >([])
  const apolloClient = useApolloClient()

  const [createList, { loading: loadingCreate }] = useMutation(
    MUTATION_CREATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.createWishlist?.wishlist?.courses || [])
        setWishlistId(data?.createWishlist?.wishlist?.id)
      }
    }
  )

  const [updateList, { loading: loadingUpdate }] = useMutation(
    MUTATION_UPDATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.updateWishlist?.wishlist?.courses || [])
      }
    }
  )

  const options = {
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  }

  const { data, loading: loadingQuery } = useQueryWishlist(options)

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.courses || [])
    setWishlistId(data?.wishlists[0]?.id)
  }, [data])

  const wishlistIds = useMemo(
    () => wishlistItems.map((course) => course.id),
    [wishlistItems]
  )

  const isInWishlist = (id: string) =>
    wishlistItems.some((course) => course.id === id)

  const optimisticCourseResponse = (id: string) => {
    const course = apolloClient.readFragment({
      id: `Course:${id}`,
      fragment: CourseFragment
    })

    return (
      course ?? {
        __typename: 'Course',
        id,
        name: '',
        slug: '',
        cover: {
          __typename: 'UploadFile',
          url: ''
        },
        instructor: [
          {
            __typename: 'Instructor',
            name: ''
          }
        ],
        price: ''
      }
    )
  }

  const addToWishlist = (id: string) => {
    // se não existir wishlist - cria
    if (!wishlistId) {
      return createList({
        variables: { input: { data: { courses: [...wishlistItems, id] } } },
        optimisticResponse: {
          createWishlist: {
            wishlist: {
              id: String(Math.round(Math.random() * -1000000)),
              courses: [optimisticCourseResponse(id)],
              __typename: 'Wishlist'
            },
            __typename: 'createWishlistPayload'
          }
        },
        update: (cache, payload) => {
          const newWishlist = payload.data.createWishlist.wishlist

          const existingWishlist = cache.readQuery<QueryWishlist>({
            query: QUERY_WISHLIST,
            ...options
          })

          if (existingWishlist && newWishlist) {
            cache.writeQuery({
              query: QUERY_WISHLIST,
              data: {
                wishlists: [newWishlist]
              },
              ...options
            })
          }
        }
      })
    }

    // senão atualiza a wishlist existente
    return updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: { courses: [...wishlistIds, id] }
        }
      },
      optimisticResponse: {
        updateWishlist: {
          wishlist: {
            id: wishlistId,
            courses: [...wishlistItems, optimisticCourseResponse(id)],
            __typename: 'Wishlist'
          },
          __typename: 'updateWishlistPayload'
        }
      }
    })
  }

  const removeFromWishlist = (id: string) => {
    return updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: {
            courses: wishlistIds.filter((courseId: string) => courseId !== id)
          }
        }
      },
      optimisticResponse: {
        updateWishlist: {
          wishlist: {
            id: wishlistId,
            courses: wishlistItems.filter(
              ({ id: courseId }) => courseId !== id
            ),
            __typename: 'Wishlist'
          },
          __typename: 'updateWishlistPayload'
        }
      }
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        items: wishlistItems.map((course) => ({
          id: course.id,
          title: course.name,
          slug: course.slug,
          category: course.category?.name,
          img: `${getImageUrl(course.cover?.url)}`,
          price: course.price
        })),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading: loadingQuery || loadingCreate || loadingUpdate
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
