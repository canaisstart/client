import { Done } from '@styled-icons/material-outlined/Done'
import Link from 'next/link'
import { useEffect } from 'react'

import Base from 'templates/Base'

import { Container } from 'components/Container'
import { CourseCardProps } from 'components/CourseCard'
import Showcase from 'components/Showcase'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import { useCart } from 'hooks/use-cart'

export type SuccessTemplateProps = {
  recommendedTitle: string
  recommendedCourses: CourseCardProps[]
  recommendedHighlight: HighlightProps
}

const Success = ({
  recommendedTitle,
  recommendedCourses
}: SuccessTemplateProps) => {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Heading>Sua compra foi efetuada com sucesso!</S.Heading>

          <S.CheckMark>
            <Done />
          </S.CheckMark>

          <S.Text>
            Aguarde seus dados de pagamento por email. Seu curso já está
            disponível na sua aba{' '}
            <Link href="/profile/courses">
              <a>Meus Cursos</a>
            </Link>
            . Bom estudo!
          </S.Text>
        </S.Wrapper>
      </Container>

      <Showcase title={recommendedTitle} courses={recommendedCourses} />
    </Base>
  )
}

export default Success
