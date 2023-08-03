import styled from 'styled-components'
import { css } from 'styled-components'

interface BgColorProps {
  current: boolean
}

export const Flex = styled.li<BgColorProps>`
  ${({ theme, current }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    transition: background-color 0.3s ease;

    background-color: ${current ? '#D9D9D9' : 'white'};

    > h3 {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: 500;
    }

    cursor: pointer;
    :hover {
      background: #d9d9d9;
    }
  `}
`

export const RowGap = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    align-items: center;

    > p {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: 300;
    }
  `}
`

interface InputRadioProps {
  isSelected: boolean
}

export const InputRadio = styled.div<InputRadioProps>`
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? '#00CD08' : 'transparent'};
  border: 1px solid ${({ isSelected }) => (isSelected ? '#009906' : '#282E41')};
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
`
