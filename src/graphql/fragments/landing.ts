import { gql } from '@apollo/client'

export const LandingFragment = gql`
  fragment LandingFragment on Landing {
    id
    slug
    banner {
      url
    }
    heading
    description
    color
    learnItem {
      icon {
        url
      }
      title
      description
    }
    forYou {
      description
      highlight
      icon {
        url
      }
    }
  }
`
