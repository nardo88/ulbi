import { classNames } from 'helpers/classNames/classNames'
import { FC, useState } from 'react'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import { useTranslation } from 'react-i18next'
import cls from './Sidebat.module.scss'

interface Sidebat {}

export const Sidebar: FC<Sidebat> = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const { t } = useTranslation()
  const onToggle = () => setCollapsed(!collapsed)
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
      <div className={cls.items}>
        <AppLink
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('О нас')}</span>
        </AppLink>
      </div>
      <div className={cls.switcher}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  )
}
