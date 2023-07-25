import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { CourseFragment } from 'graphql/fragments/course'
import { HighlightFragment } from 'graphql/fragments/highlight'

// GET_HOME | QUERY_HOME
export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    freeCourses: courses(
      where: { price: 0 }
      sort: "updated_at:desc"
      limit: 8
    ) {
      ...CourseFragment
    }

    sections: home {
      popularCourses {
        title
        highlight {
          ...HighlightFragment
        }
        courses(limit: 8) {
          ...CourseFragment
        }
      }

      freeCourses {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${CourseFragment}
  ${HighlightFragment}
`
