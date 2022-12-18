import { StateSchema } from 'app/providers/StorePropvider'

export const getProfileData = (state: StateSchema) => state?.profile?.data
