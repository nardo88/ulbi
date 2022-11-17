import { Story } from '@storybook/react'
// импортируем глобальные стили
import 'app/styles/index.scss'

// Наш декоратор просто возвращает story но уже тут у нас импортированы стили
export const StyleDecorator = (story: () => Story) => story()
