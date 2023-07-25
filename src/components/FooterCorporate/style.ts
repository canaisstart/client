import styled from 'styled-components'
import theme from 'styles/theme'
import media from 'styled-media-query'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  padding: 2rem ${theme.spacings.xsmall};
`

export const FooterHead = styled.div``

export const FooterBody = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #6c6d72;
  border-bottom: 1px solid #6c6d72;
  padding: 2rem 0;
`

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;

  > span {
    display: flex;
    gap: 0.5rem;
  }
`

export const LeftSection = styled.div`
  width: 48%;
  > span {
    font-weight: 300;
    color: white;
  }
`

export const RightSection = styled.div`
  width: 48%;
`

export const Divider = styled.hr``

export const FooterForm = styled.form`
  gap: 2rem;
  display: flex;
  flex-direction: column;

  padding: 3rem 2rem;
  background-color: #474950;
`

export const FooterInput = styled.div`
  display: flex;

  > button {
    flex-grow: 1;
    color: white;
    background: #01003b;
    border: none;
    text-align: center;
    font-size: clamp(12, 5vw, 16px);
    min-height: 45px;
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    gap: 1rem;
  `}
`

export const Anchors = styled.div`
  display: flex;
  gap: 0.5rem;

  > a > svg {
    width: 16px;
    color: white;
  }
`
