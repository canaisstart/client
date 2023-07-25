import Learning from 'templates/Learning'
import { initializeApollo } from 'utils/apollo'
import {
  QUERY_COURSES,
  QUERY_COURSES_BY_SLUB_VIDEO
} from 'graphql/queries/courses'
import {
  QueryCourseBySlug,
  QueryCourseBySlugVariables
} from 'graphql/generated/QueryCourseBySlug'
import {
  QueryCourses,
  QueryCoursesVariables
} from 'graphql/generated/QueryCourses'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { CourseTemplatePropsVideo } from 'templates/Learning'

const apolloClient = initializeApollo()

export default function Index(props: CourseTemplatePropsVideo) {
  const router = useRouter()

  if (router.isFallback) return null
  return <Learning {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    QueryCourses,
    QueryCoursesVariables
  >({
    query: QUERY_COURSES
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
    query: QUERY_COURSES_BY_SLUB_VIDEO,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache'
  })

  if (!data.courses.length) {
    return { notFound: true }
  }

  const course = data.courses[0]
  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      courseInfo: {
        id: course.id,
        title: course.name,
        price: course.price || null,
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
      videoDetails: course?.curriculum?.map((video) => ({
        module: video?.module,
        content: video?.content?.map((content) => ({
          name: content?.name,
          description: content?.description,
          video: content?.video,
          file: content?.file
        }))
      }))
    }
  }
}
