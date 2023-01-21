import { classNames } from 'helpers/classNames/classNames'
import { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ArticleView, ArticleViewSelector } from 'entities/Article'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector'

import { articlePageActions } from '../../model/slices/articlePageSlice'
import { getArticlePageView } from '../../model/selectors/articlePageSelectors'
import cls from './ArticlePageFilter.module.scss'

interface ArticlePageFilter {
  className?: string
}

export const ArticlePageFilter: FC<ArticlePageFilter> = ({ className }) => {
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlePageView)
  const { t } = useTranslation()

  const onViewChange = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view))
    },
    [dispatch]
  )
  return (
    <div className={classNames('', {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector />
        <ArticleViewSelector view={view} onViewClick={onViewChange} />
      </div>
      <Card className={cls.search}>
        <Input placeholder={t('Поиск')} />
      </Card>
    </div>
  )
}
