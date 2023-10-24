import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  margin-bottom: 30px;
  border-radius: 10px;
  padding: 40px 30px;
  background-color: #f9f9f9;
  transition: $transition;
  border-bottom: 2px solid #eee;

  ${media.lessThan('medium')`
    padding: 20px 30px;
    margin-bottom: 10px;
  `}
`

export const Title = styled.h1`
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

export const Icon = styled.div`
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

export const Description = styled.div`
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
