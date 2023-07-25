import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const Loader = styled.div`
  width: 84px;
  height: 84px;
  position: relative;
`

export const ProgressRing = styled.svg`
  width: 100%;
  height: 100%;
  position: relative;
  transform: rotate(-90deg);
`
export const Track = styled.circle`
  position: absolute;
  top: 0;
  fill: transparent;
  stroke: #fafafa; /* cor do anel externo */
  stroke-width: 3.3;
  transform-origin: center;
`

export const Circle = styled.circle`
  fill: transparent;
  stroke: #00cd08; /* cor do anel externo */
  stroke-width: 3.3;
  transform-origin: center;
  transition: stroke-dashoffset 0.35s;
  z-index: 1;
`

export const Icon = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
`

export const Content = styled.div`
  color: white;

  > div {
    display: flex;
    justify-content: space-between;
  }

  > h2 {
  }

  > div > p {
    font-size: 16px;
    font-weight: 600;
    color: #00cd08;
  }

  > div > span {
    text-align: center;
    font-size: 12px;
    font-weight: 400;
  }
`
