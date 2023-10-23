import styled, { css } from 'styled-components'

export const PCContainer = styled.div`
  position: relative;
  background-color: red;
  width: 200px;
  height: 200px;
  cursor: pointer;

  ::after {
    transition: height 0.4s; /* Alterado para 300ms */
    position: absolute;
    bottom: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 30%;
    background-color: rgba(
      0,
      0,
      0,
      0.85
    ); /* Corrigido o valor alpha para 0.85 */
    backdrop-filter: blur(10px);
  }

  :hover {
    ::after {
      height: 100%; /* A transição real é definida apenas aqui, fora do :hover */
    }
  }
`

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 30%;
  padding: 0.75rem 2rem;

  > p {
    color: #d9d9d9;
    font-size: 12px;
  }
`

type IProgressBar = {
  concluited: number
}

export const ProgressBar = styled.div<IProgressBar>`
  ${({ concluited, theme }) => css`
    width: 100%;

    background-color: #d9d9d9;
    height: 3.828px;

    ::after {
      display: flex;
      content: '';
      width: ${concluited}%;
      height: 100%;
      background-color: ${theme.colors.primary};
    }
  `}
`

export const Head = styled.div`
  width: 100%;
  height: 20%;

  position: absolute;
  top: 0;

  z-index: 3;
  color: #d9d9d9;
  padding: 1rem;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0; /* Inicialmente definido como invisível */

  :hover {
    opacity: 1; /* Torna visível ao passar o mouse */
    transition: opacity 0.8s ease; /* Adiciona uma transição suave de opacidade */
  }
`

export const Title = styled.h3`
  font-size: 14px;
`
