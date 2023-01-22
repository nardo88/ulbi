import { classNames } from 'helpers/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TextSize } from 'shared/ui/Text/Text'
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

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles?.length > 0 ? articles?.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  )
}
