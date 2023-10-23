import { Navigate, createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/home";
import { Login } from "../pages/login";

import Layout from "./layout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to={'/app'} />,
      },
      {
        path: "/app",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);