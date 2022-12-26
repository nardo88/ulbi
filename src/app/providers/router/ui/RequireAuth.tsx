import { getAuthUserData } from 'entities/User'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'

// eslint-disable-next-line no-undef
export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector(getAuthUserData)
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  return children
}
