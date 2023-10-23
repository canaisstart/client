import Empty from 'components/Empty'
import CourseItem, {
  CourseItemProps,
  PaymentInfoProps
} from 'components/CourseItem'
import Heading from 'components/Heading'
import * as S from './styles'
import PlayCourse from 'components/PlayCourse'

type OrderProps = {
  id: string
  paymentInfo: PaymentInfoProps
  courses: CourseItemProps[]
}

export type CoursesListProps = {
  items?: OrderProps[]
}

const CoursesList = ({ items = [] }: CoursesListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      Meus cursos
    </Heading>

    <S.RenderCourses>
      {items.length &&
        items.map((order) => {
          return order.courses.map((course) => (
            <PlayCourse
              key={`${order.id}-${course.id}`}
              redirectUrl={`/learning/${course.slug}`}
              concluited={course.concluited || 0}
              {...course}
            />
          ))
        })}
    </S.RenderCourses>
    {!items.length && (
      <Empty
        title="Você ainda não tem cursos"
        description="Volte para a loja e explore os ótimos cursos e ofertas"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default CoursesList
