import styled from 'styled-components'

export const Flex = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  background-color: white;

  > h2 {
    font-weight: 500;
  }
`

export const RowGap = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  > p {
    font-weight: 300;
  }
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
