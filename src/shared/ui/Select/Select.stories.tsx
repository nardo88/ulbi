import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Select } from './Select'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]
Primary.args = {
  label: 'Test select',
  options: [
    { value: '111', content: '111' },
    { value: '222', content: '222' },
    { value: '333', content: '333' },
  ],
}
