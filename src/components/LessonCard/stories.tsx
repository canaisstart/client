import { Story, Meta } from '@storybook/react/types-6-0'
import LessonCard, { ILessonCard } from '.'

export default {
  title: 'LessonCard',
  component: LessonCard
} as Meta<ILessonCard>

export const Default: Story<ILessonCard> = (args) => <LessonCard {...args} />
