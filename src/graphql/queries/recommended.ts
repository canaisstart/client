import { gql } from '@apollo/client'
import { CourseFragment } from 'graphql/fragments/course'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_RECOMMENDED = gql`
  query QueryRecommended {
    recommended {
      section {
        title
        highlight {
          ...HighlightFragment
        }
        courses {
          ...CourseFragment
        }
      }
    }
  }

  ${CourseFragment}
  ${HighlightFragment}
`
