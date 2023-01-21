import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StorePropvider'
import { Article, ArticleView } from 'entities/Article'
import { ArticleSortField } from 'entities/Article/model/types/article'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/consts/localstorage'
import { SortOrder } from 'shared/types'
import { fetchArticlesList } from '../services/fetchArticlesList'
import { ArticlePageSchema } from '../types/articlePageSchema'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},

    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
    sort: ArticleSortField.CREATED,
    search: '',
    limit: 9,
    order: 'asc',
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    initialState: (state) => {
      const view =
        (localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView) || ArticleView.SMALL
      state.view = view
      state.limit = view === ArticleView.BIG ? 4 : 9
      state._inited = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        articlesAdapter.setMany(state, action.payload)
        state.hasMore = action.payload.length > 0
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: articlePageActions } = articlePageSlice
export const { reducer: articlePageReducer } = articlePageSlice
