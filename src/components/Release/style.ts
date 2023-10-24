import styled from 'styled-components'

export const ReleaseContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #282e41 0%, #9400d3 100%);
  z-index: 19;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 2rem;
`

export const VideoContainer = styled.div`
  width: 60%;
  height: fit-content;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 10px 13px 19px -9px rgba(0, 0, 0, 1);
  z-index: 10;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  min-height: 80%;
  padding: 0 1rem;

  > button {
    background: linear-gradient(180deg, #9747ff 0%, #9400d3 100%);

    padding: 1rem 11px;

    box-shadow: 0px 2.062404155731201px 4.124808311462402px 0px
      rgba(0, 0, 0, 0.15);

    font-size: 16px;
    font-weight: 700;

    color: #fafafa;

    border: none;
    cursor: pointer;
    width: 243px;

    :hover {
      opacity: 0.5;
    }
  }
`

export const Heading = styled.h1`
  color: white;
  max-width: 421px;
  font-size: 42px;
  font-weight: 700;
  line-height: 48.38px;

  > strong {
    color: rgba(0, 205, 8, 1);
  }
`

export const Text = styled.div`
  font-weight: 400;
  max-width: 568px;
  color: #fafafa;
  font-size: 16.9px;
  line-height: 25.35px;

  > strong {
    font-weight: 600;
  }
`

export const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
