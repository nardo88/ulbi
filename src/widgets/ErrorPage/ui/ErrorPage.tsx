import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './ErrorPage.module.scss'

interface ErrorPage {}

export const ErrorPage: FC<ErrorPage> = () => {
  const { t } = useTranslation()

  // eslint-disable-next-line no-restricted-globals
  const reloadPage = () => location.reload()
  return (
    <div className={classNames(cls.errorPage, {}, [])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  )
}
