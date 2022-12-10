import { StateSchema } from 'app/providers/StorePropvider'

export const getLoginIsloading = (state: StateSchema) =>
  state?.loginForm?.isLoading || false
