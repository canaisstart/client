import styled from 'styled-components'
import * as CourseItemStyles from 'components/CourseItem/styles'

export const Wrapper = styled.div`
  ${CourseItemStyles.Wrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`
