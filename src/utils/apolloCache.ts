import { InMemoryCache } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        courses: concatPagination(['where', 'sort'])
      }
    },
    Wishlist: {
      fields: {
        courses: {
          merge(_, incoming) {
            return incoming
          }
        }
      }
    }
  }
})
