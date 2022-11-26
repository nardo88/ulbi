import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})

Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aut nulla, quaerat architecto nobis quasi dolorem. Magni mollitia nulla sunt repellendus molestias facilis porro pariatur. Deleniti deserunt vero',
}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aut nulla, quaerat architecto nobis quasi dolorem. Magni mollitia nulla sunt repellendus molestias facilis porro pariatur. Deleniti deserunt vero',
}
