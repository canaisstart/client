import Base from 'templates/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import CourseCard, { CourseCardProps } from 'components/CourseCard'
import { Divider } from 'components/Divider'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import Empty from 'components/Empty'
import { useWishlist } from 'hooks/use-wishlist'
import Loader from 'components/Loader'

import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedTitle: string
  recommendedCourses: CourseCardProps[]
}

const Wishlist = ({
  recommendedTitle,
  recommendedCourses
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist()

  return (
    <Base>
      <Container data-cy="wishlist">
        <Heading lineLeft lineColor="secondary">
          Favoritos
        </Heading>

        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((course, index) => (
              <CourseCard key={`wishlist-${index}`} {...course} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Sua lista de favoritos está vazia"
            description="Cursos adicionados a sua lista de favoritos aparecerão aqui."
            hasLink
          />
        )}
        <Divider />
      </Container>

      <Showcase title={recommendedTitle} courses={recommendedCourses} />
    </Base>
  )
}

export default Wishlist
