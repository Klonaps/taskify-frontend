import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useUserStore } from '@shared/model/store'
import { checkAuth } from '@shared/api'
import { LoadingContainer } from '@features/loading-container'

export const RootLayout = () => {
  const accessToken = useUserStore(store => store.accessToken)
  const isAuthChecked = useUserStore(store => store.isAuthChecked)
  const authCheckFailed = useUserStore(store => store.authCheckFailed)

  useEffect(() => {
    if (!accessToken) {
      authCheckFailed()
    } else {
      checkAuth(accessToken)
    }
  }, [])

  if (!isAuthChecked) return <LoadingContainer />
  return <Outlet />
}
