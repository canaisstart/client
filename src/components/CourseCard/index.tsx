import Image from 'next/image'
import Link from 'next/link'

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'

import formatPrice from 'utils/format-price'

import * as S from './styles'
import { useEffect, useState } from 'react'
import { useQueryUserHasCourse } from 'graphql/queries/courses'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

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
}: CourseCardProps) => {
  const session = useSession()
  const [userHasCourse, setUserHasCourse] = useState(false)

  const { data, loading } = useQueryUserHasCourse({
    variables: {
      userId: session[0]?.id as string,
      slug: id || '',
      status: 'paid'
    }
  })

  useEffect(() => {
    if (data) {
      console.log(data)
      setUserHasCourse(data?.orders?.length > 0)
    }
  }, [data])

  return (
    <S.Wrapper data-cy="course-card" available={available}>
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
          </S.Info>
        </Link>
        <S.FavButton>
          <WishlistButton id={id} />
        </S.FavButton>
        <S.BuyBox>
          {price !== null && (
            <S.Price>
              {price === 0 ? 'Grátis' : `${formatPrice(price)}`}
            </S.Price>
          )}
          {available && !userHasCourse && !loading && <CartButton id={id} />}
          {!available && (
            <S.Unavailable watch={userHasCourse}>Em breve</S.Unavailable>
          )}
          {available && userHasCourse && (
            <Link href={`/learning/${slug}`} passHref>
              <S.Unavailable watch={userHasCourse}>Assistir</S.Unavailable>
            </Link>
          )}
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default CourseCard
