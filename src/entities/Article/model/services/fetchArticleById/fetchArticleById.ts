import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { Article } from '../../types/article'

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'article/fetchArticleById',
  async (articleId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expand: 'user',
        },
      })

      return response.data
    } catch (e) {
      return rejectWithValue('Что-то пошло не так!')
    }
  }
)
