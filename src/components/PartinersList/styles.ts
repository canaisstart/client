import styled from 'styled-components'

export const Partner = styled.div`
  position: relative;
`

export const Title = styled.div`
  position: relative;
  bottom: -1px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: clamp(8px, 2.22vw, 28px);
  font-weight: 600;
  line-height: 45px;
  color: white;

  padding: 0 6rem;
  background-color: rgba(76, 139, 245, 1);
  filter: drop-shadow(
    3.6133487224578857px -3.6133487224578857px 7.2266974449157715px rgba(0, 0, 0, 0.25)
  );
  clip-path: polygon(50% 0%, 82% 0, 85% 100%, 50% 100%, 15% 100%, 18% 0);
`

export const Content = styled.div`
  border-radius: 8px;
  border: 4px solid rgba(76, 139, 245, 1);
  padding: 4rem 2rem;
`
