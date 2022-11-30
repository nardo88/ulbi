import { DeepPartial } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { StateSchema, StoreProvider } from 'app/providers/StorePropvider'
import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

export interface renderWithRouterOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function ComponentRender(
  component: ReactNode,
  options: renderWithRouterOptions = {}
) {
  const { route = '/', initialState } = options
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
    </StoreProvider>
  )
}
