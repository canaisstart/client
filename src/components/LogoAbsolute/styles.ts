import styled, { css } from 'styled-components'

import { LogoAbsoluteProps } from '.'
import media from 'styled-media-query'

export const LogoContainer = styled.div<LogoAbsoluteProps>`
  position: absolute;
  z-index: 1;

  width: 700px;
  height: 800px;

  ${({ posX, posY, rotate }) => css`
    left: ${posX};
    top: ${posY};
    transform: rotate(${rotate}deg);
  `}

  ${media.lessThan('medium')`
    display: none !important; 
  `}
`
