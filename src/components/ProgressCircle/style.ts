import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const Loader = styled.div`
  width: 50px;
  height: 50px;

  ${media.greaterThan('medium')`
    width: 83px;
    height: 83px;
  `}
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
  ${media.greaterThan('medium')`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  `}
  width: 50%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25%;
  left: 25%;
`

export const Content = styled.div`
  color: white;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  > h2 {
    font-size: 16px;
    display: none;
    ${media.greaterThan('medium')`
      display: block
    `}
  }

  > div > p {
    width: 3ch;
    display: none;
    font-size: 16px;
    font-weight: 600;
    color: #00cd08;
    ${media.greaterThan('medium')`
      display: block
    `}
  }

  > div > span {
    max-width: 115px;
    display: flex;
    gap: 4px;
    align-items: center;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
  }

  > div > span > strong {
    color: #00cd08;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transform: rotate(90deg);
  }
`
