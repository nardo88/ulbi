import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface StoreProvider {
  children: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProvider> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  )
  return <Provider store={store}>{children}</Provider>
}
