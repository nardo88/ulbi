import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Button, ThemeButton } from './Button'

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
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

// создаем экземпляры нашего шаблона и передаем им разные пропсы
export const Primary = Template.bind({})
// мы можем конкретно для каждого экземпляра указать свой декоратор
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]
Primary.args = {
  children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
}

export const Outline = Template.bind({})
Primary.decorators = [ThemeDecorator(Theme.DARK)]

Outline.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
}
