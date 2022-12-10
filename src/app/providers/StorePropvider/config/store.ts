import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { ReduxStoreWithManager, StateSchema } from './StateSchema'

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducer?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducer,
    counter: counterReducer,
    user: userReducer,
  }

  // создаем reducerManager, в качестве аргумента передаем корневой редюсер
  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema>({
    // ВАЖНО!!! при формировании store редюсеры уже получаем из reducerManager
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  }) as ReduxStoreWithManager

  // добавляем нашему store reducerManager
  store.reducerManager = reducerManager

  return store
}
