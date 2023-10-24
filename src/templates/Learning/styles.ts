import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container } from 'components/Container'

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  margin-bottom: 20rem;
`
export const LeftBar = styled.div`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
  `}
`

export const Head = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${theme.colors.white};
    margin-bottom: 2rem;
    overflow: hidden;
  `}
`

export const Module = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Content = styled.div`
  width: 100%;
`

export const ContentWrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    color: ${theme.colors.white};
    border-left: 8px solid ${theme.colors.secondary};
    padding: 1rem;
    gap: 0.5rem;

    font-size: clamp(20px, 2.22vw, 28px);
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      > svg {
        display: none
      }
    `}
  `}
`

export const VideoBox = styled.div`
  width: 100%;
  position: relative;
  border-radius: 5px;
  max-width: 1000px;
  z-index: 1;
  margin: {
    left: auto;
    right: auto;
    top: 100px;
  }
`

export const Description = styled.div`
  border: 1.5px solid white;
  border-radius: 4px;
  padding: 16px 10px;
  color: white;
`

export const Controls = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;

  .disable {
    cursor: not-allowed;
    background: linear-gradient(180deg, #d9d9d9 0%, #fafafa 100%),
      linear-gradient(0deg, #d9d9d9, #d9d9d9);
    border-color: rgba(250, 250, 250, 1);
  }

  .disable:hover {
    cursor: not-allowed;
    background: linear-gradient(180deg, #d9d9d9 0%, #fafafa 100%),
      linear-gradient(0deg, #d9d9d9, #d9d9d9);
  }
`

export const ControlsIcon = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 50%;
  border: 1px solid #9625ea;
  background: #9747ff;
  transition: background 0.3s ease;
  margin-top: 1rem;

  :hover {
    background: #b486ff;
  }

  cursor: pointer;
  > svg {
    color: white;
  }
`
export const ControlsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: white;
    display: none;
  }

  ${media.greaterThan('medium')`
    > p {
      display: flex
    }
  `}
`

export const CourseHeading = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: clamp(16px, 2vw, 28px);
    font-weight: 300;
    p > strong {
      font-size: clamp(20px, 2.22vw, 28px) !important;
      font-weight: 600;
    }

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin-bottom: 1.5rem;

    ${media.greaterThan('medium')`
        padding-left: 1.6rem;
        border-left: 8px solid ${theme.colors.secondary};
      `}
  `}
`

export const DownloadMaterial = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    color: ${theme.colors.white};

    cursor: pointer;

    border: 1px solid ${theme.colors.white};
    padding: 0.5rem 1rem;

    text-decoration: none;

    :hover {
      background-color: rgba(255, 255, 255, 0.05);
    }

    > p {
      font-size: ${theme.font.sizes.small};
      display: none;
    }

    > div,
    svg {
      min-width: 1rem;
    }

    ${media.greaterThan('medium')`
        > p {
          display: flex;
        }
      `}
  `}
`
