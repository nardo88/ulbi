import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleView, Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSceleton } from '../ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'

interface ArticleList {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, i) => <ArticleListItemSceleton view={view} key={i} className={cls.card} />)

export const ArticleList: FC<ArticleList> = (props) => {
  const { articles, isLoading, className, view = ArticleView.SMALL } = props
  const { t } = useTranslation()

  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} view={view} key={article.id} className={cls.card} />
  }

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    )
  }
  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles?.length > 0 ? articles?.map(renderArticle) : null}
    </div>
  )
}
