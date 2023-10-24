import { QueryHookOptions, gql, useQuery } from '@apollo/client'
import { CourseFragment } from 'graphql/fragments/course'
import {
  QueryOrders,
  QueryOrdersVariables
} from 'graphql/generated/QueryOrders'

export const QUERY_ORDERS = gql`
  query QueryOrders($identifier: ID!) {
    orders(where: { user: { id: $identifier } }, sort: "created_at:desc") {
      id
      created_at
      status
      checkout_url
      courses {
        ...CourseFragment
        available
        curriculum {
          content {
            id
            users_permissions_users(where: { id: $identifier }) {
              id
            }
          }
        }
      }
    }
  }
  ${CourseFragment}
`

export function useQueryUserOrders(
  options?: QueryHookOptions<QueryOrders, QueryOrdersVariables>
) {
  return useQuery<QueryOrders, QueryOrdersVariables>(QUERY_ORDERS, options)
}
