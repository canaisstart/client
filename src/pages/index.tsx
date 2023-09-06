import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannerMapper, highlightMapper } from 'utils/mappers'
import { getImageUrl } from 'utils/getImageUrl'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, freeCourses, sections }
  } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME,
    fetchPolicy: 'no-cache' // garantir sempre dado novo na geração do estático!
  })

  return {
    revalidate: 3600,
    props: {
      banners: bannerMapper(banners),
      mostPopularCoursesTitle: sections?.popularCourses?.title,
      mostPopularHighlight: highlightMapper(
        sections?.popularCourses?.highlight
      ),
      mostPopularCourses: sections?.popularCourses?.courses.map((course) => ({
        id: course.id,
        title: course.name,
        slug: course.slug,
        instructor: course.instructor?.name,
        img: `${getImageUrl(course.cover?.url)}`,
        price: course.price
      })),
      freeCoursesTitle: sections?.freeCourses?.title,
      freeCourses: freeCourses.map((course) => ({
        id: course.id,
        title: course.name,
        slug: course.slug,
        instructor: course.instructor?.name,
        img: `${getImageUrl(course.cover?.url)}`,
        price: course.price
      })),
      freeHighlight: highlightMapper(sections?.freeCourses?.highlight),
      formationCourses: {
        courses: sections?.formationCourses?.courses.map((course) => ({
          id: course.id,
          title: course.name,
          slug: course.slug,
          instructor: course.instructor?.name,
          img: `${getImageUrl(course.cover?.url)}`,
          price: null
        })),
        title: sections?.formationCourses?.title || null
      }
    }
  }
}
