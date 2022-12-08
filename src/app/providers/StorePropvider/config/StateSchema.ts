import { LoginSchema } from 'features/AuthByUsername'
import { CounterSchema } from 'entities/Counter'
import { UseSchema } from 'entities/User'

export interface StateSchema {
  counter: CounterSchema
  user: UseSchema
  loginForm: LoginSchema
}
