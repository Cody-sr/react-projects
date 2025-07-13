import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <div>404 page not found</div>,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={routes} />;
}
