import { FC, memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
import { classNames } from 'helpers/classNames/classNames'
import {
  DinamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage'
import { fetchArticlesList } from '../../model/services/fetchArticlesList'
import {
  getArticlePageError,
  getArticlePageIsloading,
  getArticlePageView,
} from '../../model/selectors/articlePageSelectors'
import {
  articlePageActions,
  articlePageReducer,
  getArticles,
} from '../../model/slices/articlePageSlice'

interface ArticlesPages {}

const reducers: ReducerList = {
  articlesPage: articlePageReducer,
}

const ArticlesPages: FC<ArticlesPages> = () => {
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlePageIsloading)
  const error = useSelector(getArticlePageError)
  const view = useSelector(getArticlePageView)

  const onViewChange = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view))
    },
    [dispatch]
  )

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage())
  }, [dispatch])

  useEffect(() => {
    dispatch(articlePageActions.initialState())
    dispatch(
      fetchArticlesList({
        page: 1,
      })
    )
  }, [dispatch])

  return (
    <DinamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart} className={classNames('', {}, [])}>
        <ArticleViewSelector view={view} onViewClick={onViewChange} />
        <ArticleList view={view} isLoading={isLoading} articles={articles} />
      </Page>
    </DinamicModuleLoader>
  )
}

export default memo(ArticlesPages)
