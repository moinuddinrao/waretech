import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import { Layout } from "./Layout";

import { CustomerMaintenance } from "@/pages/CustomerMaintenance";
import { ErrorPage } from "@/pages/ErrorPage";

import { ROUTES } from "@/common/routes";

export const Router = () => {
  // Create the router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          loader: () => redirect(ROUTES.dashboards),
        },
        {
          path: ROUTES.dashboards,
          children: [
            {
              index: true,
              loader: () => redirect(ROUTES.maintenance),
            },
            {
              path: ROUTES.maintenance,
              element: <CustomerMaintenance />,
            },
          ],
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
