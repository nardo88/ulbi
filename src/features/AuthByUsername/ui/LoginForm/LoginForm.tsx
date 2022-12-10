import {
  loginActions,
  loginReducer,
} from 'features/AuthByUsername/model/slice/loginSlice'
import { classNames } from 'helpers/classNames/classNames'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
  DinamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsloading } from '../../model/selectors/getLoginIsloading/getLoginIsloading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsloading)

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
    <DinamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.LoginForm, {}, [className])}>
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
    </DinamicModuleLoader>
  )
})

export default LoginForm
