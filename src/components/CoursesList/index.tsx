import Empty from 'components/Empty'
import CourseItem, {
  CourseItemProps,
  PaymentInfoProps
} from 'components/CourseItem'
import Heading from 'components/Heading'
import * as S from './styles'

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

    {items.length ? (
      items.map((order) => {
        return order.courses.map((course) => (
          <CourseItem
            key={`${order.id}-${course.id}`}
            redirectUrl={`/learning/${course.slug}`}
            {...course}
            paymentInfo={order.paymentInfo}
          />
        ))
      })
    ) : (
      <Empty
        title="Você ainda não tem cursos"
        description="Volte para a loja e explore os ótimos cursos e ofertas"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default CoursesList
