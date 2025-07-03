import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";

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
        path: "/jobs/:id",
        loader: async ({ params }) => {
          const id = params.id;
          return fetch(`http://localhost:5000/jobs/${id}`);
        },
        element : <PrivateRoute><JobDetails></JobDetails></PrivateRoute>
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
      }, {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
