import { StateSchema } from 'app/providers/StorePropvider'

export const getValidateProfileErrors = (state: StateSchema) => state.profile?.validateErrors
