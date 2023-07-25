import styled from 'styled-components'
import media from 'styled-media-query'

import theme from 'styles/theme'

export const Wrapper = styled.menu`
  padding: 2.4rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RefsWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: ${theme.spacings.small} 0;

  ${media.lessThan('medium')`
    flex-direction: column;
    gap: 2.5rem;
  `}
`

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${theme.spacings.small};

  .colored {
    color: #008000;
  }

  h2 {
    text-align: center;
    font-weight: 400;
  }

  width: 50%;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const Accreditations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacings.xxsmall};

  width: 80%;
  background-color: white;
  padding: 2rem;
  border-radius: 2rem;

  > h2 {
    color: #01003b;
  }

  ${media.lessThan('medium')`
    width: 100%;
  `}
`
