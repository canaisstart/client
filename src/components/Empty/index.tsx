import Image from 'next/image'
import Link from 'next/link'

import Button from 'components/Button'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <Image
      src="/img/empty2.svg"
      alt="A person on the table"
      width={330}
      height={235}
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/courses" passHref>
        <Button as="a">Voltar para loja</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
