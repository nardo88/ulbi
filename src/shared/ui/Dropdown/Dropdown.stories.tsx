import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { Button } from '../Button/Button'
import { Dropdown } from './Dropdown'

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'first',
      onClick: () => null,
    },
    {
      content: 'second',
      onClick: () => null,
    },
    {
      content: 'third',
      onClick: () => null,
    },
  ],
}
