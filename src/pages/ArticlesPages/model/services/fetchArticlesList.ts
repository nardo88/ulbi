import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { Article } from 'entities/Article'
import {
  getArticlePageLimit,
  getArticlePageNumber,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
} from '../selectors/articlePageSelectors'

interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlePage/fetchArticlesList', async (props, thunkApi) => {
  const { rejectWithValue, extra, getState } = thunkApi
  const sort = getArticlePageSort(getState())
  const order = getArticlePageOrder(getState())
  const search = getArticlePageSearch(getState())
  const page = getArticlePageNumber(getState())
  const limit = getArticlePageLimit(getState())
  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
      },
    })

    return response.data
  } catch (e) {
    return rejectWithValue('Что-то пошло не так!')
  }
})
