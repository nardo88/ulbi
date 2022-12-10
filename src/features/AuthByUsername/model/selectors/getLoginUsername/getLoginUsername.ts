import { StateSchema } from 'app/providers/StorePropvider'

export const getLoginUsername = (state: StateSchema) =>
  state?.loginForm?.username || ''
