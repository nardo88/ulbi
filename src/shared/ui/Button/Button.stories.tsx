import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Button, ButtonTheme, ButtonSize } from './Button'

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
  theme: ButtonTheme.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACGROUND,
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
}
