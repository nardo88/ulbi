import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Text, TextTheme } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Caption',
  text: 'Lorem ipsum dolor sit amet, ',
}

export const Error = Template.bind({})
Error.args = {
  title: 'Caption',
  text: 'Lorem ipsum dolor sit amet, ',
  theme: TextTheme.ERROR,
}

export const onlyTitle = Template.bind({})
onlyTitle.args = {
  title: 'Caption',
}

export const onlyText = Template.bind({})
onlyText.args = {
  text: 'Lorem ipsum dolor sit amet, ',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
PrimaryDark.args = {
  title: 'Caption',
  text: 'Lorem ipsum dolor sit amet, ',
}

export const onlyTitleDark = Template.bind({})
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
onlyTitleDark.args = {
  title: 'Caption',
}

export const onlyTextDark = Template.bind({})
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
onlyTextDark.args = {
  text: 'Lorem ipsum dolor sit amet, ',
}
