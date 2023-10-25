import { Navigate, createBrowserRouter } from "react-router-dom";

import { RootLayout } from "./layouts/root-layout";
import { AuthorizedLayout } from "./layouts/authorized-layout";
import { UnauthorizedLayout } from "./layouts/unauthorized-layout";

import { Home } from "@pages/home";
import { Login } from "@pages/login";

export const appRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <AuthorizedLayout />,
        children: [
          {
            path: "/",
            element: <Navigate to={"/app"} />,
          },
          {
            path: "/app",
            element: <Home />,
          },
          {
            path: "/apps",
            element: <Home />,
          },
        ],
      },
      {
        element: <UnauthorizedLayout />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);