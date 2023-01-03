import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StorePropvider'
import { Comment } from 'entities/Comment'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'

// создаем адаптер, который позволяет работать с нормализованными данными
const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
})

// создаем селектор
export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  // изначальное состояние мы получаем с помощью адаптера
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false
        commentsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
