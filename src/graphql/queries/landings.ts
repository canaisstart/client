import { gql } from '@apollo/client'
import { CourseFragment } from 'graphql/fragments/course'
import { LandingFragment } from 'graphql/fragments/landing'

export const QUERY_LANDINGS = gql`
  query QueryLandings($limit: Int, $start: Int, $where: JSON, $sort: String) {
    landings(limit: $limit, start: $start, where: $where, sort: $sort) {
      ...LandingFragment
    }
  }

  ${LandingFragment}
`

export const QUERY_LANDING_BY_SLUG = gql`
  query QueryLandingBySlug($slug: String!) {
    landings(where: { slug: $slug }) {
      ...LandingFragment
      course {
        ...CourseFragment
      }
    }
  }

  ${LandingFragment}
  ${CourseFragment}
`
