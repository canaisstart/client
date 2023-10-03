import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import theme from 'styles/theme'
import { Container } from 'components/Container'

export const themeCorporate = {
  colors: {
    mainBg: '#06092B',
    black: 'rgba(1,1,1,1)',
    grey: 'rgba(125, 125, 125, 1)',
    blue: 'rgba(76, 139, 245, 1)',
    white: '#FAFAFA'
  }
}

const button = css`
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

export const MenuLinkBtn = styled.div`
  ${button}
  padding: 12px 24px;
  font-size: 16px;
  ${media.greaterThan('medium')`
    font-size: 16px;
  `}
  ${media.lessThan('medium')`
    font-size: 12px;
  `}
`

export const Heading = styled.h2`
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

  width: 100vw;
  max-width: 100vw;
  max-height: 100vh;
  height: 100vh;
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
  position: relative;
  top: 3rem;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`

export const BackgroundGradient = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 100%;

  background: linear-gradient(180deg, rgba(6, 9, 43, 0) 0%, #06092b 80.21%);
  box-shadow: 0px 5px 0px 4px rgba(6, 9, 43, 1);
  position: absolute;
  top: -2px;
  left: 0;
`

export const LandingText = styled(Container)`
  position: absolute;
  bottom: 4%;
  z-index: 1;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    color: white;
  }

  div > h2 {
    line-height: 50px;
    font-size: 48px;
    max-width: 832px;
    font-weight: 500;
    ${media.lessThan('medium')`
      font-size: 32px;
    `}
  }

  div > p {
    display: none;
  }

  div > button {
    ${button}
    ${media.greaterThan('medium')`
      font-size: 24px;
    `}
    ${media.lessThan('medium')`
      font-size: 16px;
    `}
    font-size: 28px;
    margin-top: 20px;
    padding: 12px 32px;
  }

  ${media.greaterThan('medium')`
    div > p {
      margin-top: 2rem;
      margin-bottom: 2rem;
      display: flex;
      font-size: clamp(16px, 1.67vw, 22px);
      color: ${themeCorporate.colors.white};
      max-width: 63%;
    }
  `}
`

export const PartinersContainer = styled(Container)`
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
      font-size: clamp(32px, 3vw, 35px);
      font-weight: 700;
      line-height: 55px;
      letter-spacing: 0em;
      text-align: left;

      ${media.lessThan('medium')`
        font-size: 25px;
      `}
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

  width: 180px;
  height: 180px;

  margin: 2rem;
`
