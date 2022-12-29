import { StateSchema } from 'app/providers/StorePropvider'

export const getArticleDetailsData = (state: StateSchema) => state?.articleDetails?.data
export const getArticleDetailsIsloading = (state: StateSchema) => state?.articleDetails?.isLoading
export const getArticleDetailsError = (state: StateSchema) => state?.articleDetails?.error
