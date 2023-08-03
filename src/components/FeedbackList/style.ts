import styled from 'styled-components'
import theme from 'styles/theme'

export const FeedbackListContainer = styled.div`
  padding: ${theme.spacings.small} 0;
`

export const FeedbackHeading = styled.div`
  text-align: center;

  > h2 {
    color: rgba(250, 250, 250, 1);
  }

  > p {
    /*color: rgba(76, 139, 245, 1);*/
    color: ${theme.colors.lightBg};
  }
`

export const FlexGap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.small};

  .slick-dots {
    z-index: 1;
    display: flex !important;
    justify-content: center;
    list-style: none;
  }

  .slick-dots button {
    z-index: 1;
    opacity: 0;
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
  }

  .slick-dots li {
    z-index: 1;

    width: 1.125rem;
    height: 1.125rem;
    border-radius: 100%;
    background: rgba(217, 217, 217, 1);
    margin: 3px;
  }

  .slick-dots li.slick-active {
    background: rgba(76, 139, 245, 1);
  }
`

export const Gradient = styled.div`
  width: 102%;
  height: 100%;
  background: rgb(40, 46, 65);
  background: linear-gradient(
    90deg,
    rgba(40, 46, 65, 1) 0%,
    rgba(40, 46, 65, 0) 30%,
    rgba(40, 46, 65, 0) 70%,
    rgba(40, 46, 65, 1) 100%
  );

  position: absolute;
  top: 0;
  left: -1%;
`

export const Relative = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  position: relative;
`
