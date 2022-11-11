import { classNames } from 'helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.notFoundPage, {}, [])}>
      {t('Страница не найдена')}
    </div>
  )
}
