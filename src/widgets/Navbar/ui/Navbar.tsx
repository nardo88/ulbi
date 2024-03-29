import {
  getAuthUserData,
  isUserAdmin,
  isUserManager,
  userActions,
} from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { classNames } from 'helpers/classNames/classNames'
import { FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authUserData = useSelector(getAuthUserData)
  const dispatch = useDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const { t } = useTranslation()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  if (authUserData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Text
          theme={TextTheme.INVERTED}
          className={cls.appName}
          title={'UlbiTV'}
        />
        <AppLink
          className={cls.createBtn}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.article_create}
        >
          {t('Создать статью')}
        </AppLink>
        <Dropdown
          direction={'bottom left'}
          className={cls.dropdown}
          items={[
            ...(isAdminPanelAvailable
              ? [
                  {
                    content: t('Админка'),
                    href: RoutePath.admin_panel,
                  },
                ]
              : []),
            {
              content: t('Профиль'),
              href: RoutePath.profile + authUserData.id,
            },
            {
              content: t('Выйти'),
              onClick: onLogout,
            },
          ]}
          trigger={<Avatar size={30} src={authUserData.avatar} />}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </div>
  )
})
