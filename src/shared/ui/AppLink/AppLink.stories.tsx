import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
  // shared - указание раздела где будет отображен stories
  title: 'shared/AppLink',
  // какой компонент будет отрисован
  component: AppLink,
  // описание пропсов
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.decorators = [ThemeDecorator(Theme.DARK)]

Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
}
