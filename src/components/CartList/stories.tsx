import { Story, Meta } from '@storybook/react/types-6-0'
import CartList, { CartListProps } from '.'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    cartContextValue: {
      type: ''
    },
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<CartListProps>

export const Default: Story = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)

export const WithButton: Story = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList hasButton />
  </div>
)

export const Empty: Story<CartListProps> = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
