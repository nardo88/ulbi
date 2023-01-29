import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { Flex } from './Flex'

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Row = Template.bind({})

Row.args = {
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
}

export const Column = Template.bind({})

Column.args = {
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
}

export const Gap4 = Template.bind({})

Gap4.args = {
  gap: '4',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
}

export const Gap8 = Template.bind({})

Gap8.args = {
  gap: '8',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
}

export const Gap16 = Template.bind({})

Gap16.args = {
  gap: '16',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
}

export const Gap32 = Template.bind({})

Gap32.args = {
  gap: '32',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
}
