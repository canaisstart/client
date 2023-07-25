import { Story, Meta } from '@storybook/react/types-6-0'
import ModuleCard, { IModuleCard } from '.'

export default {
  title: 'ModuleCard',
  component: ModuleCard
} as Meta<IModuleCard>

export const Default: Story<IModuleCard> = (args) => <ModuleCard {...args} />
