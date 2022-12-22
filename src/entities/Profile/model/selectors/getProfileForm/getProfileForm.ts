import { StateSchema } from 'app/providers/StorePropvider'

export const getProfileForm = (state: StateSchema) => state?.profile?.form
