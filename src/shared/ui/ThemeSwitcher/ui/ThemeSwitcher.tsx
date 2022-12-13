import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'helpers/classNames/classNames'
import { FC, memo } from 'react'
import LightIcon from 'shared/assets/icons/light.svg'
import DarkIcon from 'shared/assets/icons/dark.svg'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwitcher {}

export const ThemeSwitcher: FC<ThemeSwitcher> = memo(() => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
})
