import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home'
import './index.css'
import { UserRegister } from './pages/userRegister'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/register",
    element: <UserRegister></UserRegister>,
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
