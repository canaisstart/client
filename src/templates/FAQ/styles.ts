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
  z-index: -1;

  img {
    object-fit: cover;
    object-position: top center;
  }

  ${media.greaterThan('medium')`
    height: 35rem;
  `}
`

export const SectionNews = styled(Container)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
      margin-top: 5.5rem;
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

    ${media.lessThan('medium')`
      background-color: ${theme.colors.lightBg};

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    `}
  `}
`

export const Heading = styled(Container)`
  ${({ theme }) => css`
    font-size: 3.5rem;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    text-align: center;

    ${media.greaterThan('large')`
      margin-top: -1rem;
      padding-top: 10rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 2rem;
      padding-top: 1rem;
    `}

    ${media.lessThan('medium')`
      margin-bottom: 5;
      padding-top: 1rem;
      padding-bottom: 1.5rem;
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Accordion = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    .accordion {
      list-style-type: none;
      padding-left: 0;
      border: none;
      margin: {
        bottom: 0;
      }

      .accordion__item {
        border-radius: 5px;
        display: block;
        box-shadow: 2px 8px 20px 0 rgba(25, 42, 70, 0.13) !important;
        background: $white-color;
        margin-bottom: 15px;
        border: none;
        border-radius: 5px;

        &:last-child {
          margin-bottom: 0;
        }
      }
      .accordion__button {
        padding: 20px 25px;
        background-color: #fff;
        color: $black-color;
        text-decoration: none;
        position: relative;
        display: block;
        border-radius: 5px;
        font: {
          size: 17px;
          weight: 800;
        }
        i {
          position: absolute;
          left: 25px;
          top: 18px;
          font-size: 25px;
          transition: $transition;
        }
        &.active {
          i {
            transform: rotate(180deg);
          }
        }
      }
      .accordion__panel {
        position: relative;
        margin-top: -5px;
        padding-bottom: 20px;
        padding-right: 30px;
        padding-left: 48px;
        padding-top: 15px;
        p {
          line-height: 1.8;
        }
      }
    }
    ${media.lessThan('medium')`
      height: 80rem;
      margin-bottom: 5;
      padding-top: 1rem;
      font-size: ${theme.font.sizes.small}
    `}
  `}
`
