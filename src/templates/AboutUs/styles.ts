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
  opacity: 0.18;

  img {
    object-fit: cover;
    object-position: top center;
  }

  ${media.greaterThan('medium')`
    height: 45rem;
  `}
`

export const SectionNews = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
      margin-top: 16.5rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 5rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    `}
  `}
`

export const Landing = styled.div`
  display: flex;

  height: 711px;

  background-color: white;
  background-image: url('img/pngwing2.png');
  background-repeat: no-repeat;
  background-position-x: 62vw;
  background-position-y: 100%;

  ${media.greaterThan('medium')`
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  `}

  ${media.lessThan('medium')`
    background-image: initial;
  `}
`

export const LandingText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;

    > h2 {
      color: ${theme.colors.mainBg};
      max-width: 515px;
    }

    > span {
      display: flex;
      color: ${theme.colors.mainBg};
      max-width: 602px;
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

export const Content = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;

    > h2 {
      border-left: 8px solid ${theme.colors.secondary};
      padding-left: 1rem;
      line-height: 79.78px;
    }
    > p {
      color: ${theme.colors.white};
    }
  `}
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  > a {
    width: 32px;
    height: 32px;
  }

  > a > svg {
    color: white;
  }
`
