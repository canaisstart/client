import { Story, Meta } from '@storybook/react/types-6-0'

import { CourseCardProps } from 'components/CourseCard'

import CourseCardSlider from '.'
import items from './mock'

export default {
  title: 'CourseCardSlider',
  component: CourseCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<CourseCardProps>

export const Default: Story<CourseCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <CourseCardSlider items={args} {...args} />
  </div>
)
