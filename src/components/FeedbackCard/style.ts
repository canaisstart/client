import styled from 'styled-components'
import theme from 'styles/theme'

export const CardContainer = styled.div`
  min-width: clamp(268.8px, 25vw, 400px);
  height: 325px;
  max-height: 375px;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xsmall};
  -webkit-box-shadow: 10px 10px 11px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 11px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 11px -10px rgba(0, 0, 0, 0.75);
  margin: 1rem;
  position: relative;
  z-index: 2;
`

export const CardHead = styled.div`
  display: flex;
  gap: 2rem;
`

export const CardBody = styled.div`
  overflow: hidden;

  > p {
    color: #7d7d7d;
    font-weight: 400;
    font-style: italic;
  }
`

export const Avatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  max-width: 75px;
  max-height: 75px;
  border-radius: 100%;
  background-color: #d2d4ff;
  overflow: hidden;

  font-size: 42px;
  color: rgba(250, 250, 250, 1);
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p {
    color: #37393f;
    font-weight: 600;
  }

  > span {
    color: #7d7d7d;
    font-weight: 400;
    font-size: ${theme.font.sizes.xsmall};
  }
`
