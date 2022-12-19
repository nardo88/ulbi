import { DeepPartial } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StorePropvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { ReducerList } from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader'

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
}

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
  }
