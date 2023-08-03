import styled from 'styled-components'
import theme from 'styles/theme'
import media from 'styled-media-query'

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  margin: 0 auto;
  margin-top: clamp(100px, 25vh, 300px);
  width: 100%;
  padding: 0 ${theme.spacings.xsmall} 2rem ${theme.spacings.xsmall};
  background: rgb(1, 1, 1);

  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    height: clamp(100px, 25vh, 300px);
    background: linear-gradient(
      to top,
      rgba(0, 1, 1, 1) 10%,
      rgba(5, 27, 50, 0) 100%
    );
  }
`

export const FooterHead = styled.div``

export const FooterBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  margin: 5rem 0;
  gap: 2rem;

  ${media.greaterThan('medium')`
    justify-content: space-between;
    flex-direction: row;
    gap: 0;
  `}
`

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  color: white;

  > span {
    display: flex;
    gap: 0.5rem;
    text-align: center;
    font-size: ${theme.font.sizes.xsmall};
  }
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > p {
    max-width: 498px;
    font-weight: 300;
    font-size: 20px;
    color: white;
  }

  > p > strong {
    color: white;
    font-weight: 500;
  }

  > span {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    color: rgba(250, 250, 250, 1);
    font-size: 20px;
    font-weight: 500;
  }

  width: 100%;
  ${media.greaterThan('medium')`
    width: 48%;

  `}
`

export const RightSection = styled.div`
  width: 100%;
  z-index: 1;

  ${media.greaterThan('medium')`
    width: 48%;
  `}
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
    width: 24px;
    color: white;
  }
`

export const Gradient = styled.div`
  width: 100%;
  height: 30px;
  position: absolute;
  background: linear-gradient(0deg, #000101 29.69%, rgba(5, 27, 50, 0) 100%);
  top: -10px;
  left: 0;
`
