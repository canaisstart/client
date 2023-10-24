import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import { Container } from 'components/Container'

export const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 39.5rem;
  opacity: 0.1;

  img {
    object-fit: cover;
    object-position: top center;
  }

  ${media.greaterThan('medium')`
    height: 90rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  `}

  ${media.lessThan('medium')`
    height: 45rem;
  `}
`

export const Landing = styled.div`
  display: flex;
  height: 611px;

  background-image: url('img/bg-woman-1.png');
  background-size: 520px;
  background-repeat: no-repeat;
  background-position-x: 52vw;
  background-position-y: 100%;

  ${media.greaterThan('medium')`

    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  `}

  ${media.lessThan('medium')`
    margin-top: 5rem;
    background-image: initial;
    height: 400px;
  `}
`

export const LandingText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;

    > h2 {
      margin-top: -15rem;
      color: ${theme.colors.white};
      max-width: 515px;
    }

    > p {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      max-width: 515px;
      margin-bottom: 4rem;
    }

    > span {
      display: flex;
      max-width: 602px;

      ${media.lessThan('medium')`
        justify-content: center;
      `}
    }
  `}
`

export const Heading = styled(Container)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.white};
    text-align: center;
    height: 100%;
    background-color: white;

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
    `}

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2)  ${theme.spacings.large};

    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const PopularCourseTitle = styled.div`
  margin-bottom: 3rem;
`

export const SectionBeneficies = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
    background-color: ${theme.colors.lightBg};

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    `}

    ${media.between('medium','large')`
        margin-top: -5rem;
        clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 85%);
    `}

    ${media.lessThan('medium')`
      padding-bottom: 3rem;
    `}
  `}
`

export const BTitle = styled.h1`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 720px;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xxlarge};
    margin: {
      left: auto;
      right: auto;
      bottom: 55px;
    }

    strong {
      color: ${theme.colors.primary};
    }

    ${media.lessThan('medium')`
      padding-top: 2rem;
      padding-left: 1rem;
      padding-bottom: 1rem;
      background-color: ${theme.colors.lightBg};
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const BSubTitle = styled.h3`
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

    ${media.between('medium','large')`
        margin-top: -8rem;
    `}
  `}
`

export const BDescription = styled.h4`
  ${({ theme }) => css`
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 600px;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xsmall};

    ${media.lessThan('medium')`
      padding-left: 1rem;
      padding-bottom: 1rem;
      background-color: ${theme.colors.lightBg};
      font-size: ${theme.font.sizes.xxsmall};
      max-width: 400px;
    `}
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
      margin-top: -5rem;
      padding-left: 1rem;
      padding-bottom: 1rem;
      font-size: ${theme.font.sizes.large};
    `}

    ${media.between('medium', 'large')`
      margin-top: -10rem;
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

    ${media.lessThan('medium')`
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 5px;
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
      margin-bottom: 1rem;
      svg {
        width: 3.5rem;
      }
    `}
`

export const CredSingleBox = styled.div`
  transition: $transition;
  position: relative;

  ${media.lessThan('medium')`
    background-color: #f2f2f2;
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

