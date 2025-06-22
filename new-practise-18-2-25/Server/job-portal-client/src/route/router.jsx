import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <p>No Route Found</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path : "/register",
        element :<Register></Register>
      }
    ],
  },
]);

export default router;
