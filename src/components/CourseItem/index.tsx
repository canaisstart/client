import Image from 'next/image'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'

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
}

const CourseItem = ({
  id,
  img,
  title,
  price,
  paymentInfo,
  slug
}: CourseItemProps) => {
  const { isInCart, removeFromCart } = useCart()
  const router = useRouter()

  const openInNewTab = router.pathname.startsWith('/profile')

  const content = (
    <S.GameContent>
      <S.ImageBox>
        <Image src={img} alt={title} width={150} height={70} />
      </S.ImageBox>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Group>
          <S.Price>{price}</S.Price>

          {isInCart(id) && (
            <S.Remove onClick={() => removeFromCart(id)}>Remover</S.Remove>
          )}
        </S.Group>
      </S.Content>
    </S.GameContent>
  )

  return (
    <S.Wrapper data-cy="game-item">
      {openInNewTab ? (
        <Link href={`/learning/${slug}`} passHref>
          <a
            style={{ textDecoration: 'none' }}
            target={openInNewTab && '_blank'}
            rel="noopener noreferrer"
          >
            {content}
          </a>
        </Link>
      ) : (
        content
      )}

      {!!paymentInfo && (
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
