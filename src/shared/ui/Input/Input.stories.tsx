import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { Input } from './Input'

export default {
  // shared - указание раздела где будет отображен stories
  title: 'shared/Input',
  // какой компонент будет отрисован
  component: Input,
  // описание пропсов
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>

// Создаем шаблон на основе нашего компонента
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

// создаем экземпляры нашего шаблона и передаем им разные пропсы
export const Primary = Template.bind({})
// мы можем конкретно для каждого экземпляра указать свой декоратор
Primary.args = {
  placeholder: 'Введите текст',
  value: '123',
}
