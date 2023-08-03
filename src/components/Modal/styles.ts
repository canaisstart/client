import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

  min-width: 100%;
  min-height: 100%;

  z-index: 10000000;
  background-color: #0b0a0ad9;
  position: fixed;
  top: 0;
  left: 0;
`

export const StopPropagation = styled.div`
  width: 100vw;
  max-width: 395px;
  padding: 0 22px;
`
