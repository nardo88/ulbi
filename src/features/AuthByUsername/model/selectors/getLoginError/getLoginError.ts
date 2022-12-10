import { StateSchema } from 'app/providers/StorePropvider'

export const getLoginError = (state: StateSchema) =>
  state?.loginForm?.error || ''
