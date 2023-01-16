import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager } from 'app/providers/StorePropvider'
import { StateSchemaKey } from 'app/providers/StorePropvider/config/StateSchema'
import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

interface DinamicModuleLoader {
  reducers: ReducerList
  removeAfterUnmount?: boolean
}

export const DinamicModuleLoader: FC<DinamicModuleLoader> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
  const store = useStore() as ReduxStoreWithManager
  const mounterReducers = store.reducerManager.getMountedReducers()
  const dispatch = useDispatch()
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mounterReducers[name as StateSchemaKey]
      if (!mounted) {
        // при монтировании добавляем reducer
        store.reducerManager.add(name as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${name} REDUCER` })
      }
    })

    // при демонтаже удаляем его из store
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          // при монтировании добавляем reducer
          store.reducerManager.remove(name as StateSchemaKey)
          dispatch({ type: `@DESTROY ${name} REDUCER` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])
  // eslint-disable-next-line
  return <>{children}</>
}
