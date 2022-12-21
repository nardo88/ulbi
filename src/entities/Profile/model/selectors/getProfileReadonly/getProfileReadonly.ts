import { StateSchema } from 'app/providers/StorePropvider'

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly
