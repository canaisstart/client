import styled from 'styled-components'

interface IContainer {
  maxHeight: number
}

export const Flex = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  overflow: hidden;
  background: rgb(151, 71, 255);
  background: linear-gradient(
    180deg,
    rgba(151, 71, 255, 1) 0%,
    rgba(148, 0, 211, 1) 100%
  );
`

export const Container = styled.div<IContainer>`
  .open {
    max-height: ${({ maxHeight }) => `${maxHeight}px`};
    margin-bottom: 10px;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 0;
  transition: max-height 1s ease, margin 0.5s ease;
  overflow: hidden;
  gap: 2px;
`
