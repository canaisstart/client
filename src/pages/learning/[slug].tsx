import Learning from 'templates/Learning'
import { initializeApollo } from 'utils/apollo'
import {
  QUERY_COURSES_BY_SLUB_VIDEO,
  USER_HAS_COURSES
} from 'graphql/queries/courses'
import {
  QueryCourseBySlug,
  QueryCourseBySlugVariables
} from 'graphql/generated/QueryCourseBySlug'
import {
  UserHasCourse,
  UserHasCourseVariables
} from 'graphql/generated/UserHasCourse'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { CourseTemplatePropsVideo } from 'templates/Learning'
import protectedRoutes from 'utils/protected-routes'

const apolloClient = initializeApollo()

export default function Index(props: CourseTemplatePropsVideo) {
  const router = useRouter()

  if (router.isFallback) return null
  return <Learning {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (!session) {
    return { props: {} }
  }

  const { data } = await apolloClient.query<
    QueryCourseBySlug,
    QueryCourseBySlugVariables
  >({
    query: QUERY_COURSES_BY_SLUB_VIDEO,
    variables: { slug: `${context.params?.slug}` },
    fetchPolicy: 'no-cache'
  })

  if (!data) {
    return { notFound: true }
  }

  const course = data?.courses[0]

  const { data: verifyUser } = await apolloClient.query<
    UserHasCourse,
    UserHasCourseVariables
  >({
    query: USER_HAS_COURSES,
    variables: {
      userId: session.id as string,
      slug: data.courses[0].id as string,
      status: 'paid'
    },
    fetchPolicy: 'no-cache'
  })

  if (!verifyUser.orders[0]?.courses[0]) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const courseInfo = {
    id: course.id,
    name: course.name,
    category: course.category?.name || null,
    description: course.description,
    modules: course.curriculum?.map((module) => {
      return {
        id: module?.id,
        name: module?.module,
        lessons: module?.content?.map((lesson) => {
          return {
            id: lesson?.id,
            name: lesson?.name,
            videoUrl: lesson?.link,
            classtime: lesson?.classtime,
            completed: lesson?.users_permissions_users.some(
              (user) => user.id == session.id
            ),
            description: lesson?.description,
            fileUrl: lesson?.file?.url || null,
            module: {
              name: module.module,
              id: module.id
            }
          }
        })
      }
    })
  }

  return {
    props: {
      courseInfo,
      slug: context.params?.slug,
      userId: session.id
    }
  }
}
