import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import theme from 'styles/theme'
import { Container } from 'components/Container'

export const themeCorporate = {
  colors: {
    mainBg: 'rgba(40, 46, 65, 1)',
    black: 'rgba(1,1,1,1)',
    grey: 'rgba(125, 125, 125, 1)',
    blue: 'rgba(76, 139, 245, 1)',
    white: '#FAFAFA'
  }
}

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #4c8bf5 0%, #0044b7 100%);
  color: ${themeCorporate.colors.white};
  padding: 1rem;
  border: 0;
  border-radius: 8px;
  width: fit-content;
`

export const Flex = styled(Container)`
  width: 100%;
  display: flex;
  z-index: 2;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  bottom: calc(3.2rem / 2);


  ${media.lessThan('medium')`
    > p {
      display: none;
    }
  `}

  > p {
    font-family: Ubuntu;
    font-size: 24px;
    font-weight: 500;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(76, 139, 245, 1);
  }
`

export const Heading = styled.h2`
  z-index: 1;
  color: ${themeCorporate.colors.white};
  line-height: clamp(30px, 4.3vw, 66px);
  font-size: clamp(16px, 4.17vw, 38px);
  font-weight: 500;
`

type View = {
  gap?: number
}

export const View = styled.div<View>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${({ gap }) => (gap ? 'center' : 'space-between')};
  gap: ${({ gap }) => (gap ? gap : 0)}rem;

  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
`

export const ViewContainer = styled(View)`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`

export const Main = styled.div`
  background-color: ${themeCorporate.colors.mainBg};
  position: relative;
  overflow: hidden;

  strong {
    font-weight: 700;
    color: ${themeCorporate.colors.blue};
  }
`

export const HeaderCorporate = styled.div`
  min-height: 208px;
  width: 100%;
  z-index: 15;
  background: linear-gradient(180deg, #000101 25%, rgba(5, 27, 50, 0) 100%);
  position: fixed;
`

export const FlexGap = styled.div`
  display: flex;
  gap: 2rem;

  ${media.lessThan('medium')`
    display: none !important;
  `}
`

export const LandingImage = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3rem;
  z-index: 1;
  width: 100%;
  height: 80vh;
  margin-bottom: 1rem;
`

export const BackgroundGradient = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 100%;

  background: linear-gradient(180deg, rgba(40, 46, 65, 0) 0%, #282e41 80.21%);
  box-shadow: 0px 5px 0px 4px rgba(40, 46, 65, 1);
  position: absolute;
  top: -2px;
  left: 0;
`
export const PartinersContainer = styled.div`
  margin-top: 0;
`

export const Wrapper = styled.menu`
  padding: 2.4rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    display: flex;
    gap: 32px;
    align-items: center;
  }
`

export const Accreditations = styled.div`
  position: relative;
  z-index: 2;
  background-color: rgba(250, 250, 250, 1);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.25);

  > div {
    z-index: 3;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.small};

    width: 100%;

    padding: 2rem;

    > h3 {
      color: rgba(0, 68, 183, 1);
      font-size: clamp(24px, 3vw, 28px);
      font-weight: 700;
      line-height: 55px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`

export const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const SliderImage = styled.div`
  position: relative;

  width: 82px;
  height: 82pxx;

  margin: 2rem;
`
