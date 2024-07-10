import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const Router = () => {
  // Create the router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <p>Home</p>,
    },
  ]);

  return <RouterProvider router={router} />;
};
