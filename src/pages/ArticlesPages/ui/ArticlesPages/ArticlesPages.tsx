import { FC, memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ArticleList } from 'entities/Article'
import { classNames } from 'helpers/classNames/classNames'
import {
  DinamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage'
import {
  getArticlePageIsloading,
  getArticlePageView,
  getArticlePageInited,
} from '../../model/selectors/articlePageSelectors'
import { articlePageReducer, getArticles } from '../../model/slices/articlePageSlice'
import { initArticlePage } from '../../model/services/initArticlePage'
import { ArticlePageFilter } from '../ArticlePageFilter/ArticlePageFilter'
import cls from './ArticlesPages.module.scss'

interface ArticlesPages {}

const reducers: ReducerList = {
  articlesPage: articlePageReducer,
}

const ArticlesPages: FC<ArticlesPages> = () => {
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlePageIsloading)
  const view = useSelector(getArticlePageView)
  const inited = useSelector(getArticlePageInited)
  const [searchParams] = useSearchParams()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage())
  }, [dispatch])

  useEffect(() => {
    dispatch(initArticlePage(searchParams))
  }, [dispatch, inited, searchParams])

  return (
    <DinamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart} className={classNames('', {}, [])}>
        <ArticlePageFilter />
        <ArticleList className={cls.list} view={view} isLoading={isLoading} articles={articles} />
      </Page>
    </DinamicModuleLoader>
  )
}

export default memo(ArticlesPages)
