import styled from 'styled-components'
import theme from 'styles/theme'

export const FeedbackListContainer = styled.div`
  background-color: #ededed;
  padding: ${theme.spacings.small} 0;
`

export const FeedbackHeading = styled.div`
  > h2 {
    color: #37393f;
  }

  > p {
    color: #7d7d7d;
  }
`

export const FlexGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.small};

  .slick-dots {
    display: none !important;
  }
`
