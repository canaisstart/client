import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { darken } from 'polished'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: [first content-start] 370px [content-end sidebar-start] 1fr [lastline];
  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    padding-top: 5rem;
    color: ${theme.colors.white};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    /* position: fixed; */
    z-index: ${theme.layers.base};
  `}
`

export const CurriculumBox = styled.div`
  ${({ theme }) => css`
    width: 33.5rem;
    margin-left: -4rem;
    margin-bottom: 3rem;
    position: relative;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border: 1px dashed ${theme.colors.secondary};
s  `}
`
export const Module = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Lesson = styled.div`
  ${({ theme }) => css`
    width: 31rem;
    margin-top: 1rem;
    margin-left: 0rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background: 1px ${theme.colors.secondary};
    font-size: ${theme.font.sizes.small};
  `}
`

export const VideoLenght = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;
    text-align: right;

    background: 1px ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xsmall};

    .icon {
      text-decoration: none;
    }
    a {
      color: ${theme.colors.white};
    }
    a:hover {
      text-decoration: underline;
      color: ${darken(0.3, theme.colors.white)};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: grid;
    align-items: top;
    justify-content: center;
    padding-top: 10rem;
  `}
`

export const ContentWrapper = styled.div`
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 5rem;

  ${media.greaterThan('medium')`
      width: 100rem;
    `}

  ${media.lessThan('medium')`
      width: 50rem;
    `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-bottom: 2rem;
    text-align: center;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xlarge}
    `}
  `}
`

export const VideoContent = styled.div`
  padding-bottom: 30px;
  margin-bottom: 30px;
`

export const VideoBox = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-radius: 5px;
    max-width: 1000px;
    z-index: 1;
    margin: {
      left: auto;
      right: auto;
      top: 100px;
    }
    background: ${theme.colors.darkGray};
  `}
`
