import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { Users, Companies, Home } from "./pages";
import { routes } from "./routes/Routes";

import "./styles/reset.css";
import "./styles/colors.css";
import "./styles/base.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: routes.users,
        element: <Users />,
      },
      {
        path: routes.companies,
        element: <Companies />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
