import { StateSchema } from 'app/providers/StorePropvider'

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text
export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error
