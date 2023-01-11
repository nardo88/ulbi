import { classNames } from 'helpers/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Page } from 'shared/ui/Page/Page'
import cls from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  const { t } = useTranslation()
  return <Page className={classNames(cls.notFoundPage, {}, [])}>{t('Страница не найдена')}</Page>
}
