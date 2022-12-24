import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Avatar } from './Avatar'
import avatar from './fonstola.ru_84796.jpg'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]
Primary.args = {
  size: 150,
  src: avatar,
}
