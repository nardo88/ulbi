import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import { getArticlePageInited } from '../selectors/articlePageSelectors'
import { articlePageActions } from '../slices/articlePageSlice'
import { fetchArticlesList } from './fetchArticlesList'

export const initArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/initArticlePage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const inited = getArticlePageInited(getState())
    if (!inited) {
      dispatch(articlePageActions.initialState())
      dispatch(
        fetchArticlesList({
          page: 1,
        })
      )
    }
  }
)
