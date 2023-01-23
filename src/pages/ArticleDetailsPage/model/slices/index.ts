import { combineReducers } from '@reduxjs/toolkit'
import { ArticleDetailsPageSchema } from '../types'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import { articleDetailsPageRecomendationsReducer } from './articleDetailsPageRecomendationsSlice'

export const articleDetailsReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recomendations: articleDetailsPageRecomendationsReducer,
})
