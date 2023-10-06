import { initializeApollo } from 'utils/apollo'
import { QUERY_COURSES } from 'graphql/queries/courses'
import {
  QueryCourses,
  QueryCoursesVariables
} from 'graphql/generated/QueryCourses'
import { parseQueryStringToWhere } from 'utils/filter'

import CoursesTemplate, { CoursesTemplateProps } from 'templates/Courses'
import { GetServerSidePropsContext } from 'next'
import {
  priceFields,
  sortFields,
  categoryFields,
  typeCourseFields
} from 'utils/filter/fields'
import {
  QueryOrders,
  QueryOrdersVariables
} from 'graphql/generated/QueryOrders'
import { QUERY_ORDERS } from 'graphql/queries/orders'
import { getSession } from 'next-auth/client'

export default function CoursePage(props: CoursesTemplateProps) {
  return <CoursesTemplate {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()
  const session = await getSession(context)

  const filterCategories = {
    title: 'Categorias',
    name: 'category',
    type: 'checkbox',
    fields: categoryFields
  }

  const filterTypeCourses = {
    title: 'Tipo de Curso',
    name: 'course_type',
    type: 'checkbox',
    fields: typeCourseFields
  }

  const filterPrice = {
    title: 'Preço',
    name: 'price_lte',
    type: 'radio',
    fields: priceFields
  }

  const filterSort = {
    title: 'Ordenar por Preço',
    name: 'sort',
    type: 'radio',
    fields: sortFields
  }

  const filterItems = [
    filterCategories,
    filterTypeCourses,
    filterPrice,
    filterSort
  ]

  await apolloClient.query<QueryCourses, QueryCoursesVariables>({
    query: QUERY_COURSES,
    variables: {
      limit: 12,
      where: parseQueryStringToWhere({
        queryString: context.query,
        filterItems
      }),
      sort: context.query.sort as string | null
    }
  })

  if (session) {
    const { data } = await apolloClient.query<
      QueryOrders,
      QueryOrdersVariables
    >({
      query: QUERY_ORDERS,
      variables: {
        identifier: session?.id as string
      },
      fetchPolicy: 'no-cache'
    })

    console.log(data)
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
