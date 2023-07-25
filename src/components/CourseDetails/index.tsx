import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type CourseDetailsProps = {
  category: string
  courseType: string
  instructor: string
  duration: string
  lesson: string
  updatedAt: string
}

const CourseDetails = ({
  category,
  courseType,
  instructor,
  duration,
  lesson,
  updatedAt
}: CourseDetailsProps) => {
  return (
    <S.Wrapper data-cy="game-details">
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Detalhes do curso
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Categoria</S.Label>
          <S.Description>{category}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Tipo de curso</S.Label>
          <S.IconsWrapper>{courseType}</S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Instrutor</S.Label>
          <S.Description>{instructor}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Duração</S.Label>
          <S.Description>{duration}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Aulas</S.Label>
          <S.Description>{lesson}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Última autalização</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('pt-BR', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric'
            }).format(new Date(updatedAt))}
          </S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default CourseDetails
