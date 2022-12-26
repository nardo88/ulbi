import { StateSchema } from 'app/providers/StorePropvider'

export const getUserInited = (state: StateSchema) => state.user._inited
