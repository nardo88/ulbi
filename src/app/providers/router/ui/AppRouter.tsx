import React, { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routerConfig } from 'shared/config/routerConfig/routerConfig'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { RequireAuth } from './RequireAuth'

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    )
  }, [])
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routerConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
