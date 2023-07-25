import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { PaymentIntent, StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'

import { useCart } from 'hooks/use-cart'
import Button from 'components/Button'
import Heading from 'components/Heading'

import * as S from './styles'
import { createPayment, createPaymentIntent } from 'utils/stripe/methods'

import { FormLoading } from 'components/Form'
import { Session } from 'next-auth'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()
  const { push } = useRouter()
  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeCourses, setFreeCourses] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        // bater na API /orders/create-payment-intent
        const data = await createPaymentIntent({
          items,
          token: session.jwt as string
        })

        // se eu receber freeCourses: true => setFreeCourses
        // faço o fluxo de curso gratuito
        if (data.freeCourses) {
          setFreeCourses(true)
          return
        }

        // se eu receber um erro
        // setError
        if (data.error) {
          setError(data.error)
        } else {
          // senão o paymentIntent foi válido
          // setClientSecret
          setFreeCourses(false)
          setClientSecret(data.client_secret)
        }
      }
    }

    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({
      items,
      paymentIntent,
      token: session.jwt as string
    })

    return data
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    // se for freeCourses
    if (freeCourses) {
      // salva no banco
      // bater na API /orders
      saveOrder()

      // redireciona para success
      push('/success')
      return
    }

    const payload = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!
      }
    })

    if (payload.error) {
      setError(`Pagamento falhou ${payload.error.message}`)
      setLoading(false)
    } else {
      setError(null)
      setLoading(false)

      // salvar a compra no banco do Strapi
      // bater na API /orders
      saveOrder(payload.paymentIntent)

      // redirectionar para a página de Sucesso
      push('/success')
    }
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" size="small" lineBottom>
            Pagamento
          </Heading>

          {freeCourses ? (
            <S.FreeGames>
              Para cursos gratuitos, basta clicar em comprar agora e bons
              estudos!
            </S.FreeGames>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '16px'
                  }
                }
              }}
              onChange={handleChange}
            />
          )}

          {error && (
            <S.Error>
              <ErrorOutline size={20} />
              {error}
            </S.Error>
          )}
        </S.Body>
        <S.Footer>
          <Link href="/" passHref>
            <Button as="a" fullWidth minimal>
              Continuar comprando
            </Button>
          </Link>
          <Button
            fullWidth
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={!freeCourses && (disabled || !!error || loading)}
          >
            {!loading && <span>Comprar agora</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
