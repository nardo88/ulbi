import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { Listbox } from './ListBox'

export default {
  title: 'shared/Listbox',
  component: Listbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Listbox>

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />

export const Primary = Template.bind({})
Primary.args = {}
