import styled from 'styled-components'

export const RenderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 10.5rem;
  row-gap: 1.5rem;
`
export const Item = styled.div`
  position: relative;
  width: clamp(148px, 5vw, 400px);
  height: clamp(68px, 5vh, 300px);
`
