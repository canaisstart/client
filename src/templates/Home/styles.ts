import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import { Container } from 'components/Container'

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};

    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionNews = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    `}
  `}
`

export const SectionBeneficts = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
    background-color: ${theme.colors.lightBg};

    ${media.greaterThan('large')`
      margin-top: -13rem;
      padding-top: 5rem;
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 15rem;
      padding-bottom: 10rem;
      height: 75rem;
      background-color: ${theme.colors.lightBg};
    `}

    ${media.lessThan('medium')`
      height: 95rem;
      padding-left: 1rem;
      padding-right: 1rem;
      background-color: ${theme.colors.lightBg};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 720px;
    font-weight: ${theme.font.normal};
    margin: {
      left: auto;
      right: auto;
      bottom: 55px;
    }

    strong {
      color: ${theme.colors.primary};
    }

    ${media.lessThan('medium')`
      padding-left: 1rem;
      padding-bottom: 1rem;
      background-color: ${theme.colors.lightBg};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.secondary};
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 720px;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};

    ${media.lessThan('medium')`
      padding-top: 1rem;
      padding-left: 1rem;
      background-color: ${theme.colors.lightBg};
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`

export const Description = styled.h4`
  ${({ theme }) => css`
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 720px;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xsmall};

    ${media.lessThan('medium')`
      padding-top: 1rem;
      padding-left: 1rem;
      padding-bottom: 1rem;
      background-color: ${theme.colors.lightBg};
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`

export const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 39.5rem;
  opacity: 0.18;

  img {
    object-fit: cover;
    object-position: top center;
  }

  ${media.greaterThan('medium')`
    height: 80rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  `}
`

export const FWrapper = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${theme.grid.gutter};
    `}
  `}
`

export const FContent = styled.div`
  margin-bottom: 30px;
  border-radius: 10px;
  padding: 40px 30px;
  background-color: #f9f9f9;
  transition: $transition;
  border-bottom: 2px solid #eee;

  ${media.lessThan('medium')`
    padding: 20px 30px;
    margin-bottom: 20px;
  `}
`

export const FTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const FIcon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    right: 1rem;
    top: -0.5rem;
    padding-bottom: 1rem;
    svg {
      width: 6.5rem;
    }

    ${media.lessThan('medium')`
      svg {
        width: 3.5rem;
      }
    `}
  `}
`

export const FDescription = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: ${theme.spacings.xxsmall};
    color: ${theme.colors.gray};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`

export const SectionClients = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
    background-color: ${theme.colors.mainBg};

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 1rem;
      height: 70rem;
      background-color: ${theme.colors.mainBg};
    `}

    ${media.lessThan('medium')`
      height: 135rem;
      padding-left: 1rem;
      padding-right: 1rem;
      background-color: ${theme.colors.mainBg};
    `}
  `}
`

export const CTitle = styled.h1`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 900px;
    color: white;
    font-weight: ${theme.font.normal};
    margin: {
      left: auto;
      right: auto;
      bottom: 55px;
    }

    strong {
      color: ${theme.colors.primary};
    }

    ${media.lessThan('medium')`
      padding-left: 1rem;
      padding-bottom: 1rem;
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const CSubtitle = styled.div`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.secondary};
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 720px;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    padding-top: 1rem;

    ${media.lessThan('medium')`
      padding-top: 1rem;
      padding-left: 1rem;
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`

export const CImages = styled(Container)`
  padding-top: 6rem;
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: ${theme.grid.gutter};
    `}
  `}
`

export const CImagesCard = styled.div`
  margin-bottom: 30px;
  justify-self: center;
`

export const SectionNumbers = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};

    ${media.greaterThan('large')`
      margin-top: 1rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 5rem;
      padding-top: 2rem;
      padding-bottom: 10rem;
      height: 65rem;
      background-color: ${theme.colors.lightBg};
    `}

    ${media.lessThan('medium')`
      margin-bottom: 5rem;
      height: 135rem;
      padding-left: 1rem;
      padding-right: 1rem;
      background-color: ${theme.colors.lightBg};
    `}
  `}
`
export const NWrapper = styled(Container)`
  ${({ theme }) => css`
    padding-top: 4rem;

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`
export const NContent = styled.div`
  ${({ theme }) => css`
    margin-bottom: 1px;
    border-radius: 10px;
    padding: 30px 30px;
    background-color: ${theme.colors.lightBg};
    transition: $transition;
    align-self: center;
    justify-self: center;
  `}
`

export const NBox = styled.div`
  ${({ theme }) => css`
    margin-bottom: 30px;
    text-align: center;
    transition: $transition;
    position: relative;
    overflow: hidden;

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`

export const CredBox = styled.div`
  ${({ theme }) => css`
    text-align: center;
    transition: $transition;

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: ${theme.grid.gutter};
    `}

    ${media.lessThan('medium')`
      background-color: white;
      svg {
        width: 3.5rem;
      }
    `}
  `}
`

export const NSingleBox = styled.div`
  ${({ theme }) => css`
    text-align: center;
    border: 1px dashed ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border-radius: 1rem;
    transition: $transition;
    position: relative;
  `}

  ${media.lessThan('medium')`
    ${({ theme }) => css`
      margin-bottom: 1rem;
      svg {
        width: 3.5rem;
      }
      background-color: ${theme.colors.white};
    `}
    `}
`

export const CredSingleBox = styled.div`
  border-radius: 1rem;
  transition: $transition;
  position: relative;

  ${media.lessThan('medium')`
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: white;
      svg {
        width: 3.5rem;
      }
    `}
`

export const NIcon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    right: 1rem;
    top: -0.5rem;
    padding-bottom: 1rem;
    svg {
      width: 5.5rem;
    }

    ${media.lessThan('medium')`
      svg {
        width: 3.5rem;
      }
    `}
  `}
`
