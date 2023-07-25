import { Story, Meta } from '@storybook/react/types-6-0'
import CourseDetails, { CourseDetailsProps } from '.'
import mockGame from './mock'

export default {
  title: 'Course/CourseDetails',
  component: CourseDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative']
      }
    }
  }
} as Meta<CourseDetailsProps>

export const Default: Story<CourseDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <CourseDetails {...args} />
  </div>
)
