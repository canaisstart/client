import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;
    border-radius: 8px;
    overflow: hidden;
  `}
`

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 40rem;
  margin-bottom: 2rem;
  padding: 1rem 2rem 1rem 2rem;

  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
    color: #282e41;
  }
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-weight: 300;
    font-size: 16px;
    line-height: 36px;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 36px;
    color: #282e41;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem 1rem 2rem;
  background-color: #d9d9d9;

  span {
    margin-top: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #282e41;
    cursor: pointer;
    text-decoration: underline;
  }

  button {
    padding: 1rem 2rem 1rem 2rem;
    background-color: #00cd08;
    color: #fafafa;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`
