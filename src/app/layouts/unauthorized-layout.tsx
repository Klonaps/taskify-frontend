import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useUserStore } from '@shared/model/store/user-store'

export const UnauthorizedLayout = () => {
  const user = useUserStore(store => store.user)
  const location = useLocation()
  const statePath =
    location.state !== null ? location.state.from.pathname : '/app'

  if (user) {
    return <Navigate to={statePath} replace />
  }

  return <Outlet />
}
