import { classNames } from 'helpers/classNames/classNames'
import { FC, memo, useMemo, useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Sidebat.module.scss'
import { SidebarItemList, SidebarItemType } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface Sidebat {}

export const Sidebar: FC<Sidebat> = memo(() => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const onToggle = () => setCollapsed(!collapsed)

  const itemList = useMemo(() => {
    return SidebarItemList.map((item: SidebarItemType) => (
      <SidebarItem key={item.path} item={item} collapsed={collapsed} />
    ))
  }, [collapsed])
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])}
    >
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.collapseBtn}
        type="button"
        onClick={onToggle}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>{itemList}</div>
      <div className={cls.switcher}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  )
})
