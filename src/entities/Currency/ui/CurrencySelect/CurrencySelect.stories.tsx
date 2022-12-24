import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { CurrencySelect } from './CurrencySelect'

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {},
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />

export const Primary = Template.bind({})
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]
Primary.args = {}
