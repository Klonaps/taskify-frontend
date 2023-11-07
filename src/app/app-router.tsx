import { Navigate, createBrowserRouter } from 'react-router-dom'

import { RootLayout } from './layouts/root-layout'
import { AuthorizedLayout } from './layouts/authorized-layout'
import { UnauthorizedLayout } from './layouts/unauthorized-layout'

import { Home } from '@pages/home'
import { LoginPage } from '@pages/login'
import { RegisterPage } from '@pages/register'

export const appRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <AuthorizedLayout />,
        children: [
          {
            path: '/',
            element: <Navigate to={'/app'} />,
          },
          {
            path: '/app',
            element: <Home />,
          },
        ],
      },
      {
        element: <UnauthorizedLayout />,
        children: [
          {
            path: '/login',
            element: <LoginPage />,
          },
          {
            path: '/register',
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
])
