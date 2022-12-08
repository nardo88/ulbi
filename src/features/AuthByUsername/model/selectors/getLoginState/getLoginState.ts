import { StateSchema } from 'app/providers/StorePropvider'

export const getLoginState = (state: StateSchema) => state?.loginForm
