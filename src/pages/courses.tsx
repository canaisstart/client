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

export default function CoursePage(props: CoursesTemplateProps) {
  return <CoursesTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

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
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
