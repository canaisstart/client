import { gql } from '@apollo/client'

export const CourseFragment = gql`
  fragment CourseFragment on Course {
    id
    name
    slug
    cover {
      url
    }
    instructor {
      name
    }
    category {
      name
    }
    price
    available
  }
`
