import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'

import Course, { CourseTemplateProps } from 'templates/Course'

import {
  QueryCourses,
  QueryCoursesVariables
} from 'graphql/generated/QueryCourses'
import { QUERY_COURSES, QUERY_COURSE_BY_SLUG } from 'graphql/queries/courses'
import {
  QueryCourseBySlug,
  QueryCourseBySlugVariables
} from 'graphql/generated/QueryCourseBySlug'
import { GetStaticProps } from 'next'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

import { getImageUrl } from 'utils/getImageUrl'

const apolloClient = initializeApollo()

export default function Index(props: CourseTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null

  return <Course {...props} />
}

// gerar em build time (/game/bla, /bame/foo ...)
export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    QueryCourses,
    QueryCoursesVariables
  >({
    query: QUERY_COURSES,
    variables: { limit: 9 }
  })

  const paths = data.courses.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Get course data
  const { data } = await apolloClient.query<
    QueryCourseBySlug,
    QueryCourseBySlugVariables
  >({
    query: QUERY_COURSE_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache'
  })

  if (!data.courses.length) {
    return { notFound: true }
  }

  const course = data.courses[0]
  console.log(course)

  // get recommended courses
  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      cover: `${getImageUrl(course.cover?.url)}`,
      courseInfo: {
        id: course.id,
        title: course.name,
        price: course.price,
        description: course.short_description
      },
      description: course.description,
      details: {
        category: course.category?.name,
        courseType: course.course_type?.name,
        instructor: course.instructor?.name,
        duration: course.duration,
        lesson: course.lesson,
        updatedAt: course.updated_at
      },
      recommendedTitle: recommended.recommended?.section?.title,
      recommendedCourses: recommended.recommended?.section?.courses.map(
        (course) => ({
          id: course.id,
          title: course.name,
          slug: course.slug,
          instructor: course.instructor?.name,
          img: `${getImageUrl(course.cover?.url)}`,
          price: course.price
        })
      )
    }
  }
}
