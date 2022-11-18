import { classNames } from 'helpers/classNames/classNames'
import { FC, useState } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Sidebat.module.scss'

interface Sidebat {}

export const Sidebar: FC<Sidebat> = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const onToggle = () => setCollapsed(!collapsed)
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])}
    >
      <Button theme={ThemeButton.OUTLINE} type="button" onClick={onToggle}>
        toggle
      </Button>
      <div className={cls.switcher}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}
