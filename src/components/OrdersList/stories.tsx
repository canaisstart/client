import { Story, Meta } from '@storybook/react/types-6-0'
import OrdersList, { OrdersListProps } from '.'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: []
  }
} as Meta<OrdersListProps>

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
