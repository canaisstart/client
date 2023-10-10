import { gql } from '@apollo/client'

export const LandingFragment = gql`
  fragment LandingFragment on Landing {
    id
    name
    demo
    price
    promotional_price
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
    installment {
      max_installment
      installment_price
      fees
    }
  }
`
