import { StateSchema } from 'app/providers/StorePropvider'

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.comments.isLoading
