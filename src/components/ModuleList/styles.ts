import styled from 'styled-components'
import media from 'styled-media-query'

export const ModuleListContainer = styled.div`
  padding: 1.5rem;
  width: 100%;
  max-width: 395px;
  max-height: 70vh;
  border: 3px solid #00cd08;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  overflow-y: scroll;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  ${media.greaterThan('medium')`
    overflow: auto;
    max-height: none;
  `}
`

export const Heading = styled.div`
  color: white;
  font-size: clamp(23px, 5vw, 22px);
  line-height: clamp(35.55px, 5w, 42px);

  > h3 {
    font-weight: 600;
  }

  > p {
    font-weight: 300;
  }
`
