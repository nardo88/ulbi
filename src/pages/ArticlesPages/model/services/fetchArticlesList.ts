import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { Article } from 'entities/Article'

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlePage/fetchArticlesList',
  async (articleId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi

    try {
      const response = await extra.api.get<Article[]>('/articles', {
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
