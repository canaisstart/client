import { gql } from '@apollo/client'
import { CourseFragment } from 'graphql/fragments/course'

export const MUTATION_CREATE_WISHLIST = gql`
  mutation MutationCreateWishlist($input: createWishlistInput!) {
    createWishlist(input: $input) {
      wishlist {
        id
        courses {
          ...CourseFragment
        }
      }
    }
  }
  ${CourseFragment}
`

export const MUTATION_UPDATE_WISHLIST = gql`
  mutation MutationUpdateWishlist($input: updateWishlistInput) {
    updateWishlist(input: $input) {
      wishlist {
        id
        courses {
          ...CourseFragment
        }
      }
    }
  }
  ${CourseFragment}
`
