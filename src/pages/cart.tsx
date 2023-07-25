import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { highlightMapper } from 'utils/mappers'
import { getImageUrl } from 'utils/getImageUrl'

import Cart, { CartProps } from 'templates/Cart'

import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      recommendedTitle: data.recommended?.section?.title,
      recommendedCourses: data.recommended?.section?.courses.map((course) => ({
        id: course.id,
        title: course.name,
        slug: course.slug,
        instructor: course.instructor?.name,
        img: `${getImageUrl(course.cover?.url)}`,
        price: course.price
      })),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
