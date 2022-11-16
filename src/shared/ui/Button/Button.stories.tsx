import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  // shared - указание раздела где будет отображен stories
  title: 'shared/Button',
  // какой компонент будет отрисован
  component: Button,
  // описание пропсов
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// Создаем шаблон на основе нашего компонента
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Text</Button>
)

// создаем экземпляры нашего шаблона и передаем им разные пропсы
export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}
