import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Wrapper = styled.menu`
  padding: 2.4rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: #d9d9d9;
  overflow: hidden;
  padding: 1rem;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const FormImageWrapper = styled.div`
  display: flex;

  height: calc(100vh - 105px);

  ${media.lessThan('medium')`
    height: auto;
    flex-direction: column;
    align-items: center;
  `}

  width: auto;
`

export const ImageContainer = styled.div`
  position: relative;

  width: 40%;
  min-height: auto;

  overflow: hidden;

  ${media.lessThan('medium')`
    width: 100%;
    height: calc(100vh - 105px);
  `}
`

export const ImageDescription = styled.div`
  background-color: ${() => theme.colors.mainBg + 'D9'};

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  top: 0;
  position: absolute;

  -webkit-box-shadow: inset 10px 10px 88px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 10px 10px 88px 0px rgba(0, 0, 0, 0.75);
  box-shadow: inset 10px 10px 88px 0px rgba(0, 0, 0, 0.75);

  > span {
    width: 242px;
    font-size: ${() => theme.font.sizes.xsmall};
    color: ${() => theme.colors.gray};
  }

  > h2 {
    width: 242px;
  }
`
