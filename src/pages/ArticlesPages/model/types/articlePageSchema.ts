import { EntityState } from '@reduxjs/toolkit'
import { Article, ArticleView } from 'entities/Article'
import { ArticleSortField } from 'entities/Article/model/types/article'
import { SortOrder } from 'shared/types'

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  // Pagination
  page: number
  limit: number
  hasMore: boolean

  // Filters
  view: ArticleView
  order: SortOrder
  sort: ArticleSortField
  search: string

  _inited: boolean
}
