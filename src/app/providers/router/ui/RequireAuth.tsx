import { getAuthUserData, getUserRoles, UserRole } from 'entities/User'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'

export function RequireAuth({
  children,
  roles,
}: {
  // eslint-disable-next-line no-undef
  children: JSX.Element
  roles?: UserRole[]
}) {
  const auth = useSelector(getAuthUserData)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)
  const hasRequireRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some((item) => userRoles?.includes(item))
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  if (!hasRequireRoles) {
    return (
      <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    )
  }

  return children
}
