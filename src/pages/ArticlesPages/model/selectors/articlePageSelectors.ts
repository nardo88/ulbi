import { StateSchema } from 'app/providers/StorePropvider'

export const getArticlePageIsloading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false
export const getArticlePageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlePageView = (state: StateSchema) => state.articlesPage?.view
export const getArticlePageLimit = (state: StateSchema) => state.articlesPage?.limit
export const getArticlePageNumber = (state: StateSchema) => state.articlesPage?.page || 1
export const getArticlePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore
