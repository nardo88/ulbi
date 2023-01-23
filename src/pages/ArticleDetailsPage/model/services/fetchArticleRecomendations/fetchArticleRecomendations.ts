import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { Article } from 'entities/Article'

export const fetchArticleRecomendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articleDetailsPage/fetchArticleRecomendations',
  async (props, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4,
        },
      })

      return response.data
    } catch (e) {
      return rejectWithValue('Что-то пошло не так!')
    }
  }
)
