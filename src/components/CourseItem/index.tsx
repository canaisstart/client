import Image from 'next/image'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'
import { Play } from '@styled-icons/remix-fill'
import { useState } from 'react'

export type PaymentInfoProps = {
  number: string
  flag: string | null
  img: string | null
  purchaseDate: string
}

export type CourseItemProps = {
  id: string
  img: string
  title: string
  price: string
  slug: string
  promotionalPrice?: string
  paymentInfo?: PaymentInfoProps
  redirectUrl?: string
}

const CourseItem = ({
  id,
  img,
  title,
  price,
  paymentInfo,
  redirectUrl
}: CourseItemProps) => {
  const { isInCart, removeFromCart } = useCart()
  const [hover, setHover] = useState(false)
  const router = useRouter()

  const isInOrders = router.pathname.startsWith('/profile/orders')
  const isInProfile = router.pathname.startsWith('/profile/courses')

  const content = (
    <S.GameContent
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <S.ImageBox>
        {hover && isInProfile && (
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              width: '100%',
              zIndex: 1,
              height: '100%',
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Play color="white" width="48px" height="48px"></Play>
          </div>
        )}
        <Image src={img} alt={title} width={150} height={70} />
      </S.ImageBox>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Group>
          {isInOrders && <S.Price>{price}</S.Price>}

          {isInCart(id) && (
            <S.Remove onClick={() => removeFromCart(id)}>Remover</S.Remove>
          )}
        </S.Group>
      </S.Content>
    </S.GameContent>
  )

  return (
    <S.Wrapper data-cy="game-item">
      {redirectUrl ? (
        <Link href={redirectUrl} passHref>
          <a
            style={{ textDecoration: 'none' }}
            target={redirectUrl && '_blank'}
            rel="noopener noreferrer"
          >
            {content}
          </a>
        </Link>
      ) : (
        content
      )}

      {!!paymentInfo && isInOrders && (
        <S.PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            {!!paymentInfo.img && !!paymentInfo.flag && (
              <Image
                src={paymentInfo.img}
                alt={paymentInfo.flag}
                width={38}
                height={24}
              />
            )}
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  )
}

export default CourseItem
