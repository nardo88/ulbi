import { Story } from '@storybook/react'
// импортируем глобальные стили
import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

// Наш декоратор просто возвращает story но уже тут у нас импортированы стили
export const RouterDecorator = (StoryComponent: Story) => {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  )
}
