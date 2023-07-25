import CourseCardSlider from 'components/CourseCardSlider'
import Heading from 'components/Heading'
import { CourseCardProps } from 'components/CourseCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  courses?: CourseCardProps[]
  color?: 'black' | 'white'
}

const Showcase = ({
  title,
  highlight,
  courses,
  color = 'white'
}: ShowcaseProps) => (
  <S.Wrapper data-cy={title || 'showcase'}>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!courses && <CourseCardSlider items={courses} color={color} />}
  </S.Wrapper>
)

export default Showcase
