import { Story, Meta } from '@storybook/react/types-6-0'
import { CartContextData } from 'hooks/use-cart'

import CourseCard, { CourseCardProps } from '.'

export default {
  title: 'CourseCard',
  component: CourseCard,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235,
    promotionalPrice: 215
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta<CourseCardProps>

export const Default: Story<CourseCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <CourseCard {...args} />
  </div>
)

export const IsInCart: Story<CourseCardProps & CartContextData> = (args) => (
  <div style={{ width: '30rem' }}>
    <CourseCard {...args} />
  </div>
)

IsInCart.args = {
  isInCart: () => true
}

export const WithRibbon: Story<CourseCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <CourseCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
