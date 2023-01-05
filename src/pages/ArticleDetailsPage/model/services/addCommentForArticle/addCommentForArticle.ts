import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { Comment } from 'entities/Comment'
import { getAuthUserData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails'

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkApi) => {
    const { rejectWithValue, extra, getState, dispatch } = thunkApi
    const userData = getAuthUserData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) {
      rejectWithValue('no data')
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        text,
        userId: userData?.id,
      })

      if (!response.data) {
        throw new Error()
      }

      dispatch(fetchCommentsByArticleId(article?.id))

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
