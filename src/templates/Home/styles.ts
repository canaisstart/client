import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import { Container } from 'components/Container'

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    position: relative;

    ${media.greaterThan('medium')`
    //margin-bottom: ${theme.spacings.large};
      margin-top: -73px;  
      z-index: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

    ${media.lessThan('medium')`
      height: fit-content;
      gap: 2.25rem;
    `}
  `}
`

export const BannerImage = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.greaterThan('medium')`
    height: 100%;
  
  `}
  ${media.greaterThan('large')`
    height: 100%;
    background-image: url('/img/bannerHome.png');
    background-repeat: no-repeat;
    background-position: bottom right;
    z-index: 1;
  `}
`

export const BannerText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    ${media.lessThan('medium')`
      gap: 0px;
    `}
    color: white;
    max-width: 602px;
    position: relative;
    z-index: 3;

    ${media.greaterThan('medium')`
      margin-top: -12.75rem;
    `}

    > h1,
    h4 {
      width: 100%;
      text-align: left !important;
      background-color: transparent;
    }

    h1 {
      font-weight: ${theme.font.bold + 100};
      font-size: 60px;
      line-height: 60px;
      ${media.lessThan('medium')`
        font-size: 30px;
        line-height: 30px;
      `}
    }

    h4 {
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.xsmall};
      ${media.lessThan('medium')`
        font-size: calc(${theme.font.sizes.xsmall} - 2px);
      `}
    }

    > a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      padding: 0.625rem 2rem;
      color: white;
      width: fit-content;
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      border-radius: 8px;
      background: linear-gradient(180deg, #9747ff 0%, #9400d3 100%);
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
      border: none;
      cursor: pointer;
      margin-top: 2rem;
      ${media.lessThan('medium')`
        margin: 10px;
        padding: 0.3rem 1rem; 
      `}
    }
  `}

  > button::hover {
    opacity: 0.1;
  }
`

export const Fill = styled.div`
  display: none;
  ${media.greaterThan('medium')`
    display: flex;
    position: absolute;
    z-index: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(40, 46, 65, 0.6);
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15));
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
      padding-top: 5rem;
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
    `}

    ${media.greaterThan('medium')`
      margin-top: -13rem;
      margin-bottom: 0;
      padding-top: 15rem;
      padding-bottom: 10rem;
      height: 75rem;
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);

    `}

    ${media.lessThan('medium')`
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
    font-weight: ${theme.font.bold};
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
    font-size: ${theme.font.sizes.small};

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
  display: flex;
  position: sticky;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
  height: 39.5rem;
  opacity: 0.18;
  width: 100%;
  height: 40vh;

  img {
    object-fit: cover;
    object-position: center;
  }

  ${media.lessThan('medium')`
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0% 100%);
  `}

  ${media.greaterThan('medium')`
    position: absolute;
    height: 80rem;
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
