import { Story, Meta } from '@storybook/react/types-6-0'
import { CartContextData } from 'hooks/use-cart'
import CourseInfo, { CourseInfoProps } from '.'
import mockGame from './mock'

export default {
  title: 'Course/CourseInfo',
  component: CourseInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame
} as Meta<CourseInfoProps>

export const Default: Story<CourseInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <CourseInfo {...args} />
  </div>
)

export const IsInCart: Story<CourseInfoProps & CartContextData> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <CourseInfo {...args} />
  </div>
)

IsInCart.args = {
  isInCart: () => true
}
