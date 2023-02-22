import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import "./index.css";
import { UserLogin } from "./pages/UserLogin";
import { AdminPage } from "./pages/AdminPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "login",
    element: <UserLogin></UserLogin>,
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
