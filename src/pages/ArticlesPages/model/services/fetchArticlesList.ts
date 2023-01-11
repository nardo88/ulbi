import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { Article } from 'entities/Article'
import { getArticlePageLimit } from '../selectors/articlePageSelectors'

interface FetchArticlesListProps {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlePage/fetchArticlesList', async (props, thunkApi) => {
  const { rejectWithValue, extra, getState } = thunkApi
  const { page = 1 } = props
  const limit = getArticlePageLimit(getState())
  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
      },
    })

    return response.data
  } catch (e) {
    return rejectWithValue('Что-то пошло не так!')
  }
})
