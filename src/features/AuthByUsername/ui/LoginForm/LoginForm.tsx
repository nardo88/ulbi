import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'

interface LoginForm {}

export const LoginForm: FC<LoginForm> = () => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.LoginForm, {}, [])}>
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите имя')}
        autoFocus
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите пароль')}
      />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  )
}
