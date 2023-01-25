import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetailsData } from 'entities/Article'
import { getAuthUserData } from 'entities/User'

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getAuthUserData,
  (article, user) => {
    if (!article || !user) {
      return false
    }
    if (article?.user.id === user?.id) {
      return true
    }

    return false
  }
)
