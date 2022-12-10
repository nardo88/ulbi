import {
  AnyAction,
  combineReducers,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema'

// на вход мы принимаем какие-то reducer
export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers }
  // создаем корневой reducer
  let combinedReducer = combineReducers(reducers)
  // в этом массиве мы храним названия reducer которые мы хотим удалить
  let keysToRemove: StateSchemaKey[] = []

  // функция возвращаем объект с методами
  return {
    // возвращает reducers
    getReducerMap: () => reducers,
    //  это и есть reducer, принимает state и action, пробегается по state и удаляет
    // те ключи которые у нас содержатся в keysToRemove (т.е. удаляя reducer удаляется кусочек state)
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        keysToRemove.forEach((key: StateSchemaKey) => {
          delete state[key]
        })
        keysToRemove = []
      }
      // после чего возвращаем очищенный корневой reducer
      return combinedReducer(state, action)
    },
    // этот метод наоборот добавляет в корневой reducer наш новый reducer
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },
    // метод удаления reducer
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }
      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    },
  }
}
