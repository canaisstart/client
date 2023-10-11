import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const generateImgBackground = (
  width: number,
  height: number,
  rotate: number,
  position: {
    top?: string | number
    left?: string | number
    bottom?: string | number
    right?: string | number
  },
  overflow = false
) => {
  const top = position?.top
  const left = position?.left
  const bottom = position?.bottom
  const right = position?.right
  return css`
    overflow: ${overflow ? 'unset' : 'hidden'};
    position: relative;

    ::before {
      content: '';
      position: absolute;
      z-index: 0;
      width: ${width}px;
      height: ${height}px;
      background-image: url('/img/logo-white.svg');
      background-repeat: no-repeat;
      transform: rotate(${rotate}deg);
      opacity: 0.3;
      ${top != undefined &&
      css`
        top: ${top};
      `}
      ${left != undefined &&
      css`
        left: ${left};
      `}
    ${right != undefined &&
      css`
        right: ${right};
      `}
    ${bottom != undefined &&
      css`
        bottom: ${bottom};
      `}
    }
  `
}

export const Header = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  height: 94px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  backdrop-filter: blur(60px);
`

export const LandingContainer = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 1);
`

export const ContainerBeetwen = styled(Container)`
  display: flex;
  justify-content: space-between;
`

export const ServiceButton = styled.button`
  padding: 10px 24px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: rgba(250, 250, 250, 1);
  border-radius: 4px;
  transition: background-position 0.6s ease;
  border: none;
  cursor: pointer;

  background: linear-gradient(90deg, #9400d3 67.19%, #9747ff 100%);
  :hover {
    background-position: 203.61px;
  }
`

type WatchNowProps = {
  color: string
}

export const WatchNow = styled.button<WatchNowProps>`
  padding: 10px 24px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: rgba(250, 250, 250, 1);
  border-radius: 4px;
  transition: background-position 0.6s ease;
  border: none;
  cursor: pointer;
  width: 220px;

  ${({ color }) => color};
  :hover {
    background-position: 220px;
  }
`

export const HeaderLink = styled.a`
  font-size: 16px;
  color: white;
  ${media.lessThan('medium')`
    display: none;
  `}
`

type GapTypes = {
  gap?: string
  dir?: 'column' | 'row'
  alignItems?: 'center' | 'start'
  justify?: 'space-between' | 'center'
  width?: string
}

export const Gap = styled.div<GapTypes>`
  display: flex;
  gap: ${({ gap }) => gap || '1rem'};
  justify-content: ${({ justify }) => justify || 'auto'};
  flex-direction: ${({ dir }) => dir || 'row'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  width: ${({ width }) => width || 'auto'};
`

export const Banner = styled.div`
  position: relative;
  margin-top: 147px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
`

export const Hidden = styled.div`
  width: 100%;
  min-height: 656px;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CourseDescription = styled.div`
  max-width: 554px;
  padding: 40px 16px 60px 40px;
  top: 87px;
  right: 0px;
  margin: 2rem;
  border-radius: 8px;
  gap: 40px;
  z-index: 1;
  background: rgba(250, 250, 250, 0.6);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);

  ${media.greaterThan('small')`
    position: absolute;
  `}
`

type TextProps = {
  fontSize?: string
  fontWeight?: string
  color?: string
  align?: 'start' | 'center' | 'end'
  height?: string
}

export const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  color: ${({ color }) => color || 'white'};
  text-align: ${({ align }) => align || 'start'};
  line-height: ${({ height }) => height || 'auto'};

  > strong {
    font-weight: 600;
  }
`

type TrapezoidButtonProps = {
  color: string
}

export const TrapezoidButton = styled.button<TrapezoidButtonProps>`
  background-color: ${({ color }) => color};
  border: none;
  padding: 10px 20px;
  z-index: 1;
  cursor: pointer;
  transform-origin: center bottom;
  transition: transform 0.3s ease-in-out;
  width: 436px;
  height: 92px;
  border-radius: 4px;

  .button-text {
    display: block;
    color: rgba(250, 250, 250, 1);
    font-size: 40px;
    font-weight: 500;
  }

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const TrapezoidButtonBorder = styled.div`
  border-radius: 4px;
  padding: 10px;
  background-color: white;
  position: absolute;
  bottom: -7%;
  left: 15%;
`

export const Benefits = styled.div`
  margin: 150px 0;
`

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  border-radius: 4px;
  overflow: hidden;
  z-index: 2;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`
export const ForYou = styled.div`
  padding-top: 80px;
  background-color: black;
  overflow: hidden;
`

export const ForYouContent = styled.div`
  padding-top: 150px;
  gap: 3rem;
  padding-bottom: 243px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  ${generateImgBackground(
    944,
    831,
    346,
    { bottom: '-150px', left: '-2rem' },
    true
  )}
`

export const ForYouList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
`

type ApiProps = {
  color: string
}

export const ForYouCard = styled.div<ApiProps>`
  position: relative;
  z-index: 10;
  background-color: ${({ color }) => color};
  gap: 2rem;
  padding: 2rem;
  display: flex;
  border-radius: 4px;
  max-width: 612px;
`

export const LearningContainer = styled.div``

export const LearningCard = styled.div``

export const DetailsContainer = styled.div<ApiProps>`
  padding: 8rem 0;
  background-color: ${({ color }) => color};
  overflow: hidden;
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
  position: relative;
  z-index: 1;

  ${media.greaterThan('medium')` 
  flex-direction: row;
  `}

  ${generateImgBackground(1040, 916, 260, { bottom: '0' }, true)}
`

export const LeftSection = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;

  ${media.greaterThan('medium')` 
    width: 50%;
  `}
`

export const RightSection = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;

  ${media.greaterThan('medium')` 
    width: 50%;
  `}
`

export const Form = styled.form`
  padding: 60px 40px;
  background-color: rgba(250, 250, 250, 1);
  border-radius: 8px;
  color: rgba(40, 46, 65, 1);
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid rgba(139, 137, 137, 1);
  height: 70px;
  border-radius: 4px;
  padding: 10px 18px;
  font-size: 16px;
`

export const InputContainer = styled.div`
  width: 100%;

  > label {
    font-size: 24px;
    line-height: 50px;
  }
`
