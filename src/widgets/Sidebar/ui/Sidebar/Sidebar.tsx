import { classNames } from 'helpers/classNames/classNames'
import { FC, memo, useMemo, useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { useSelector } from 'react-redux'
import cls from './Sidebat.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { SidebarItemType } from '../../model/types/sidebar'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'

interface Sidebat {}

export const Sidebar: FC<Sidebat> = memo(() => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const sidebarItemList = useSelector(getSidebarItems)

  const onToggle = () => setCollapsed(!collapsed)

  const itemList = useMemo(() => {
    return sidebarItemList.map((item: SidebarItemType) => (
      <SidebarItem key={item.path} item={item} collapsed={collapsed} />
    ))
  }, [collapsed, sidebarItemList])
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
