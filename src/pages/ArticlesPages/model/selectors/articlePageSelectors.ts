import { StateSchema } from 'app/providers/StorePropvider'
import { ArticleSortField } from 'entities/Article'
import { ArticleTypes } from 'entities/Article/model/types/article'

export const getArticlePageIsloading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false
export const getArticlePageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlePageView = (state: StateSchema) => state.articlesPage?.view
export const getArticlePageLimit = (state: StateSchema) => state.articlesPage?.limit
export const getArticlePageNumber = (state: StateSchema) => state.articlesPage?.page || 1
export const getArticlePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore
export const getArticlePageInited = (state: StateSchema) => state.articlesPage?._inited
export const getArticlePageSearch = (state: StateSchema) => state.articlesPage?.search ?? ''
export const getArticlePageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc'
export const getArticlePageSort = (state: StateSchema) =>
  state.articlesPage?.sort ?? ArticleSortField.CREATED
export const getArticlePageType = (state: StateSchema) =>
  state.articlesPage?.type || ArticleTypes.ALL
