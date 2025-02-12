import { createBrowserRouter } from "react-router-dom";

import { HomePage, LoginPage, ProductsPage } from "@pages/";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />
  }
]);
