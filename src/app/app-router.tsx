import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout";
import { Home } from "../pages/home/home";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
]);