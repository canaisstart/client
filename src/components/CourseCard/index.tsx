import Image from 'next/image'
import Link from 'next/link'

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'

import formatPrice from 'utils/format-price'

import * as S from './styles'

export type CourseCardProps = {
  id: string
  slug: string | null
  title: string
  category: string | null
  img: string
  price: number
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  available: boolean
}

const CourseCard = ({
  id,
  slug,
  title,
  category,
  img,
  price,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  available
}: CourseCardProps) => (
  <S.Wrapper data-cy="course-card">
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`/course/${slug}`} passHref>
      <S.ImageBox>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`/course/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{category}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton>
        <WishlistButton id={id} />
      </S.FavButton>
      <S.BuyBox>
        {price !== null && (
          <S.Price>{price === 0 ? 'Grátis' : `${formatPrice(price)}`}</S.Price>
        )}
        {available ? (
          <CartButton id={id} />
        ) : (
          <S.Unavailable>Em breve</S.Unavailable>
        )}
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default CourseCard
