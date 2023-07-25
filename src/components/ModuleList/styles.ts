import styled from 'styled-components'

export const ModuleListContainer = styled.div`
  padding: 1.5rem;
  width: 100%;
  max-width: 395px;
  border: 3px solid #00cd08;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`

export const Heading = styled.div`
  color: white;

  > h3 {
    font-size: 28px;
    line-height: 42px;
    font-weight: 600;
  }

  > p {
    font-weight: 300;
    font-size: 28px;
    line-height: 42px;
  }
`
