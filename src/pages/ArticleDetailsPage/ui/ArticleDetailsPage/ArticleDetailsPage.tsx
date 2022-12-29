import { ArticleDetails } from 'entities/Article'
import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

interface ArticleDetailsPage {}

const ArticleDetailsPage: FC<ArticleDetailsPage> = () => {
  const { t } = useTranslation('article')
  const { id } = useParams()

  if (!id) {
    return <div className={classNames('', {}, [])}>{t('Статья не найдена')}</div>
  }
  return (
    <div className={classNames('', {}, [])}>
      <ArticleDetails id={id} />
    </div>
  )
}

export default ArticleDetailsPage
