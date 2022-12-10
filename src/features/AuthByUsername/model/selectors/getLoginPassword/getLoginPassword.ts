import { StateSchema } from 'app/providers/StorePropvider'

export const getLoginPassword = (state: StateSchema) =>
  state?.loginForm?.password || ''
