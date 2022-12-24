import { getAuthUserData } from 'entities/User'
import React, { memo, Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from 'shared/config/routerConfig/routerConfig'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'

const AppRouter = () => {
  const isAuth = useSelector(getAuthUserData)

  const routes = useMemo(() => {
    return Object.values(routerConfig).filter((item) => {
      if (item.authOnly && !isAuth) {
        return false
      }
      return true
    })
  }, [isAuth])
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
