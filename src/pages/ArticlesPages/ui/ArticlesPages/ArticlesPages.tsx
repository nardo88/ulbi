import { FC, memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
import { classNames } from 'helpers/classNames/classNames'
import {
  DinamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
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

  useEffect(() => {
    dispatch(fetchArticlesList())
    dispatch(articlePageActions.initialState())
  }, [dispatch])

  return (
    <DinamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [])}>
        <ArticleViewSelector view={view} onViewClick={onViewChange} />
        <ArticleList view={view} isLoading={isLoading} articles={articles} />
      </div>
    </DinamicModuleLoader>
  )
}

export default memo(ArticlesPages)
