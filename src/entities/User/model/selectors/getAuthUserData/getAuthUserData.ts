import { StateSchema } from 'app/providers/StorePropvider'

export const getAuthUserData = (state: StateSchema) => state.user.authData
