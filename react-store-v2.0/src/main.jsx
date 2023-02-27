import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import "./index.css";
import { UserPage } from "./pages/UserPage";
import { AdminPage } from "./pages/AdminPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "login",
    element: <UserPage></UserPage>,
  },
  {
    path: "admin",
    element: <AdminPage></AdminPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
