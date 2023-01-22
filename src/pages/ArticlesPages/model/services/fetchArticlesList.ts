import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { Article } from 'entities/Article'
import { ArticleTypes } from 'entities/Article/model/types/article'
import { addQueryParams } from 'shared/lib/url/addQueryParams'
import {
  getArticlePageLimit,
  getArticlePageNumber,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
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
  const type = getArticlePageType(getState())
  try {
    addQueryParams({
      search,
      sort,
      order,
      type,
    })
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        type: type === ArticleTypes.ALL ? undefined : type,
        q: search,
      },
    })

    return response.data
  } catch (e) {
    return rejectWithValue('Что-то пошло не так!')
  }
})
