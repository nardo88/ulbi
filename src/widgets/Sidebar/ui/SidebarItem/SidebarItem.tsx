import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'helpers/classNames/classNames'
import { useSelector } from 'react-redux'
import { getAuthUserData } from 'entities/User'
import { SidebarItemType } from '../../model/items'
import cls from './SidebarItem.module.scss'

interface SidebarItem {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem: FC<SidebarItem> = memo(({ item, collapsed }) => {
  const { t } = useTranslation()
  const isAuth = useSelector(getAuthUserData)

  if (item.authOnly && !isAuth) {
    return null
  }
  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
})
