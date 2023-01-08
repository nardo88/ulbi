import { StateSchema } from 'app/providers/StorePropvider'

export const getArticlePageIsloading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false
export const getArticlePageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlePageView = (state: StateSchema) => state.articlesPage?.view
