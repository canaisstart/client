import { Story, Meta } from '@storybook/react/types-6-0'
import CourseItem, { CourseItemProps } from '.'

export default {
  title: 'CourseItem',
  component: CourseItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta<CourseItemProps>

export const Default: Story<CourseItemProps> = (args) => (
  <CourseItem {...args} />
)

export const WithPayment: Story<CourseItemProps> = (args) => (
  <CourseItem {...args} />
)

WithPayment.args = {
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
