import { Session } from 'next-auth'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { CourseCardProps } from 'components/CourseCard'
import PaymentForm from 'components/PaymentForm'
import CartList, { CartListProps } from 'components/CartList'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import { Info } from '@styled-icons/material-outlined/Info'
import * as S from './styles'
import Link from 'next/dist/client/link'

export type CartProps = {
  session: Session
  recommendedTitle: string
  recommendedCourses: CourseCardProps[]
} & CartListProps

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const Cart = ({ session, recommendedTitle, recommendedCourses }: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Meu carrinho
        </Heading>
        <S.Content>
          <CartList />

          <Elements stripe={stripe}>
            <PaymentForm session={session} />
          </Elements>
        </S.Content>
        <S.Text>
          <Info size={18} /> Sua compra é protegida por uma conexão segura da
          plataforma{' '}
          <Link href="https://www.stripe.com">
            <a target="_blank" rel="noreferrer">
              Stripe
            </a>
          </Link>
          . Ao comprar em nossa loja você concorda com nossos{' '}
          <Link href="/terms">termos de uso</Link>.
        </S.Text>
        <Divider />
      </Container>

      <Showcase title={recommendedTitle} courses={recommendedCourses} />
    </Base>
  )
}

export default Cart
