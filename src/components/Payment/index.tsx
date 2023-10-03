import Empty from 'components/Empty'
import * as S from './styles'
import { Session } from 'next-auth'
import { useCart } from 'hooks/use-cart'
import { createPayment, createPaymentIntent } from 'utils/stripe/methods'
import Link from 'next/link'

export const Payment = ({ session }: { session: Session }) => {
  const { items, total } = useCart()
  const handleSubmit = async () => {
    try {
      const { payment_url } = await createPaymentIntent({
        items,
        token: session.jwt as string
      })
      console.log(payment_url)
      window.location.href = payment_url
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <S.Wrapper>
      <>
        <S.Resume>
          <h1>Resumo da compra</h1>
          {items.map((item) => (
            <S.Details key={item.title}>
              <h1>1x {item.title}</h1>
              <span>{item.price}</span>
            </S.Details>
          ))}
          <S.Details>
            <span>Total</span>
            <span>{total}</span>
          </S.Details>
        </S.Resume>
        <S.Footer>
          <Link href="/courses" passHref css={{ cursor: 'pointer' }}>
            <span>Continuar comprando</span>
          </Link>
          <button onClick={() => handleSubmit()}>Finalizar compra</button>
        </S.Footer>
      </>
    </S.Wrapper>
  )
}
