import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPage {}

const ArticleDetailsPage: FC<ArticleDetailsPage> = () => {
  const { t } = useTranslation('article')
  return <div className={classNames('', {}, [])}>ArticleDetailsPage!!!</div>
}

export default ArticleDetailsPage
