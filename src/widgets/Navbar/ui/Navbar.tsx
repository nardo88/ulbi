import { getAuthUserData, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { classNames } from 'helpers/classNames/classNames'
import { t } from 'i18next'
import { FC, memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authUserData = useSelector(getAuthUserData)
  const dispatch = useDispatch()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authUserData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Text theme={TextTheme.INVERTED} className={cls.appName} title={'UlbiTV'} />
        <AppLink
          className={cls.createBtn}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.article_create}
        >
          {t('Создать статью')}
        </AppLink>
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onLogout}>
          {t('Выйти')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </div>
  )
})
