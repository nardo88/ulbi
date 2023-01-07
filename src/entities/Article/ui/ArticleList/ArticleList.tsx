import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleView, Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import cls from './ArticleList.module.scss'

interface ArticleList {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

export const ArticleList: FC<ArticleList> = (props) => {
  const { articles, isLoading, className, view = ArticleView.SMALL } = props
  const { t } = useTranslation()

  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} view={view} key={article.id} className={cls.card} />
  }
  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles?.length > 0 ? articles?.map(renderArticle) : null}
    </div>
  )
}
