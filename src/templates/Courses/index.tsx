import { ParsedUrlQueryInput } from 'querystring'
import { useRouter } from 'next/router'

import { useQueryCourses } from 'graphql/queries/courses'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'

import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import CourseCard from 'components/CourseCard'
import { Grid } from 'components/Grid'

import * as S from './styles'
import Empty from 'components/Empty'
import { getImageUrl } from 'utils/getImageUrl'

export type CoursesTemplateProps = {
  filterItems: ItemProps[]
}

const CoursesTemplate = ({ filterItems }: CoursesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryCourses({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 12,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data) return <p>loading...</p>

  const { courses, coursesConnection } = data

  const hasMoreCourses =
    courses.length < (coursesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/courses',
      query: items
    })
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 12, start: data.courses.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          {data?.courses.length ? (
            <>
              <Grid>
                {data?.courses.map((course) => (
                  <CourseCard
                    id={course.id}
                    key={course.slug}
                    title={course.name}
                    slug={course.slug}
                    category={course.category.name}
                    img={`${getImageUrl(course.cover!.url)}`}
                    price={course.price}
                  />
                ))}
              </Grid>
              {hasMoreCourses && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="/img/dots.svg"
                      alt="Loading more courses..."
                    />
                  ) : (
                    <S.ShowMoreButton onClick={handleShowMore}>
                      <p>Exibir mais</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title=":("
              description="Não encontramos nenhum curso com eses filtros"
              hasLink
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default CoursesTemplate
