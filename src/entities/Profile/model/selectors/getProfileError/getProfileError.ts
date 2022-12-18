import { StateSchema } from 'app/providers/StorePropvider'

export const getProfileError = (state: StateSchema) => state?.profile?.error
