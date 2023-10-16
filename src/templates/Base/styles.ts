import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${76 + 105}px;
    ${media.lessThan('medium')`
    margin-top: calc(2rem + 87px);
    `}
    flex: 1 0 auto;
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      background-position: bottom;
      background-size: cover;
    `}

    ${media.lessThan('medium')`
      padding-top: rem; 
    `}
  `}
`

const onTopStyle = css`
  background-color: rgba(40, 46, 65, 0.8);
  backdrop-filter: blur(60px);
  border-bottom: 3px solid #00cd08;
`

type HeaderContainerProps = {
  onTop: boolean
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
  ${({ theme, onTop }) => css`
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 11;
    background-color: transparent;
    backdrop-filter: blur(0px);
    transition: background-color 0.5s ease, backdrop-filter ease,
      border 0.8s ease;
    ${!onTop && onTopStyle}

    ${media.greaterThan('medium')`
      ${onTopStyle}
    `}
  `}
`
