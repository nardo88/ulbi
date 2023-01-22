import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { ArticleSortField } from 'entities/Article'
import { ArticleTypes } from 'entities/Article/model/types/article'
import { SortOrder } from 'shared/types'
import { getArticlePageInited } from '../selectors/articlePageSelectors'
import { articlePageActions } from '../slices/articlePageSlice'
import { fetchArticlesList } from './fetchArticlesList'

export const initArticlePage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlePage/initArticlePage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const inited = getArticlePageInited(getState())
    if (!inited) {
      const orderFormUrl = searchParams.get('order')
      const sortFormUrl = searchParams.get('sort')
      const searchFormUrl = searchParams.get('search')
      const typeFormUrl = searchParams.get('type')

      if (orderFormUrl) {
        dispatch(articlePageActions.setOrder(orderFormUrl as SortOrder))
      }
      if (sortFormUrl) {
        dispatch(articlePageActions.setSort(sortFormUrl as ArticleSortField))
      }
      if (searchFormUrl) {
        dispatch(articlePageActions.setSearch(searchFormUrl))
      }
      if (typeFormUrl) {
        dispatch(articlePageActions.setType(typeFormUrl as ArticleTypes))
      }
      dispatch(articlePageActions.initialState())
      dispatch(fetchArticlesList({}))
    }
  }
)
