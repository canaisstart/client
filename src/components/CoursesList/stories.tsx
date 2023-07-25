import { Story, Meta } from '@storybook/react/types-6-0'
import CoursesList, { CoursesListProps } from '.'

export default {
  title: 'Profile/CoursesList',
  component: CoursesList,
  args: {
    items: []
  }
} as Meta<CoursesListProps>

export const Default: Story<CoursesListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CoursesList {...args} />
  </div>
)
