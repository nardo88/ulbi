import { Story } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  console.log(theme)
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  )
}
