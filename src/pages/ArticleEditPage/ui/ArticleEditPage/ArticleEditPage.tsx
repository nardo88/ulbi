import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page/Page'
import cls from './ArticleEditPage.module.scss'

interface ArticleEditPage {
  className?: string
}

const ArticleEditPage: FC<ArticleEditPage> = ({ className }) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)
  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? <div>{t('Редактирование статьи с id - ') + id}</div> : <div>{t('Создание')}</div>}
    </Page>
  )
}

export default ArticleEditPage
