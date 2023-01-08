import { ArticleList, ArticleView } from 'entities/Article'
import { classNames } from 'helpers/classNames/classNames'
import { FC, memo } from 'react'

interface ArticlesPages {}

const ArticlesPages: FC<ArticlesPages> = () => {
  return (
    <div className={classNames('', {}, [])}>
      <ArticleList view={ArticleView.BIG} isLoading articles={[]} />
    </div>
  )
}

export default memo(ArticlesPages)
