import { DashboardPage, LoginPage, RegisterPage } from "pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <div>404 Not found</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);
