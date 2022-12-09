import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { LoginForm } from './LoginForm'

export default {
  // shared - указание раздела где будет отображен stories
  title: 'features/LoginForm',
  // какой компонент будет отрисован
  component: LoginForm,
  // описание пропсов
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>

// Создаем шаблон на основе нашего компонента
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
)

// создаем экземпляры нашего шаблона и передаем им разные пропсы
export const Primary = Template.bind({})
// мы можем конкретно для каждого экземпляра указать свой декоратор
Primary.args = {}
Primary.decorators = [
  StoreDecorator({
    loginForm: { isLoading: false, username: 'admin', password: '123' },
  }),
]
