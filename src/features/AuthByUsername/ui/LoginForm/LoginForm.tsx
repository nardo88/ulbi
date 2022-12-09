import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { classNames } from 'helpers/classNames/classNames'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import cls from './LoginForm.module.scss'

interface LoginForm {}

export const LoginForm: FC<LoginForm> = memo(() => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { password, username, isLoading, error } = useSelector(getLoginState)

  const onChangeUsername = useCallback(
    (val) => {
      dispatch(loginActions.setUsername(val))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (val) => {
      dispatch(loginActions.setPassworf(val))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <div className={classNames(cls.LoginForm, {}, [])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text theme={TextTheme.ERROR} text={error} />}
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите имя')}
        autoFocus
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  )
})
