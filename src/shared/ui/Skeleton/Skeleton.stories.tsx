import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Skeleton } from './Skeleton'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  width: '100%',
  height: 200,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

PrimaryDark.args = {
  width: '100%',
  height: 200,
}

export const Circle = Template.bind({})

Circle.args = {
  border: '50%',
  width: 100,
  height: 100,
}

export const CircleDark = Template.bind({})
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]

CircleDark.args = {
  border: '50%',
  width: 100,
  height: 100,
}
