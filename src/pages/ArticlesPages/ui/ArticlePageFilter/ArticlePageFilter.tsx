import { classNames } from 'helpers/classNames/classNames'
import { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ArticleSortSelector, ArticleView, ArticleViewSelector } from 'entities/Article'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'

import { ArticleSortField } from 'entities/Article/model/types/article'
import { SortOrder } from 'shared/types'
import { fetchArticlesList } from 'pages/ArticlesPages/model/services/fetchArticlesList'

import { articlePageActions } from '../../model/slices/articlePageSlice'
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageView,
} from '../../model/selectors/articlePageSelectors'
import cls from './ArticlePageFilter.module.scss'

interface ArticlePageFilter {
  className?: string
}

export const ArticlePageFilter: FC<ArticlePageFilter> = (props) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlePageView)
  const { t } = useTranslation()
  const sort = useSelector(getArticlePageSort)
  const order = useSelector(getArticlePageOrder)
  const search = useSelector(getArticlePageSearch)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const onVChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view))
      dispatch(articlePageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlePageActions.setSort(newSort))
      dispatch(articlePageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlePageActions.setOrder(newOrder))
      dispatch(articlePageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(articlePageActions.setSearch(newSearch))
      dispatch(articlePageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )

  return (
    <div className={classNames('', {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onVChangeView} />
      </div>
      <Card className={cls.search}>
        <Input placeholder={t('Поиск')} value={search} onChange={onChangeSearch} />
      </Card>
    </div>
  )
}
