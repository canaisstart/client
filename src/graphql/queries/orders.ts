import { gql } from '@apollo/client'
import { CourseFragment } from 'graphql/fragments/course'

export const QUERY_ORDERS = gql`
  query QueryOrders($identifier: ID!) {
    orders(where: { user: { id: $identifier } }, sort: "created_at:desc") {
      id
      created_at
      card_brand
      card_last4
      courses {
        ...CourseFragment
      }
    }
  }
  ${CourseFragment}
`
