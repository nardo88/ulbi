import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StorePropvider'
import {
  getArticlePageHasMore,
  getArticlePageIsloading,
  getArticlePageNumber,
} from '../selectors/articlePageSelectors'
import { articlePageActions } from '../slices/articlePageSlice'
import { fetchArticlesList } from './fetchArticlesList'

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/fetchNextArticlePage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const hasMore = getArticlePageHasMore(getState())
    const page = getArticlePageNumber(getState())
    const isLoading = getArticlePageIsloading(getState())

    if (hasMore && !isLoading) {
      dispatch(articlePageActions.setPage(page + 1))
      dispatch(
        fetchArticlesList({
          page: page + 1,
        })
      )
    }
  }
)
