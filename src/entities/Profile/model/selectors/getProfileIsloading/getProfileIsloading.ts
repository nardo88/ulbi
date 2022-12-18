import { StateSchema } from 'app/providers/StorePropvider'

export const getProfileIsloading = (state: StateSchema) =>
  state?.profile?.isLoading
