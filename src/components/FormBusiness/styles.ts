import styled from 'styled-components'
import media from 'styled-media-query'

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background: rgba(76, 139, 245, 0.4);
  border: 3px solid rgba(76, 139, 245, 1);
  overflow: hidden;
  padding: 1rem;
  backdrop-filter: blur(5px);
  max-width: 550px;
  width: 100%;
  border-radius: 8px;

  ${media.greaterThan('large')`
    position: absolute;
    top: 0;
    right: 1.6rem;
  `}
`
