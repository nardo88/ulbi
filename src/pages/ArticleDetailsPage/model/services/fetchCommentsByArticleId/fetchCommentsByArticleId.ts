import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { Comment } from 'entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>('article/fetchCommentsByArticleId', async (articleId, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi

  if (!articleId) {
    return rejectWithValue('error')
  }
  try {
    const response = await extra.api.get<Comment[]>('/comments', {
      params: {
        articleId,
        _expand: 'user',
      },
    })

    return response.data
  } catch (e) {
    return rejectWithValue('Что-то пошло не так!')
  }
})
