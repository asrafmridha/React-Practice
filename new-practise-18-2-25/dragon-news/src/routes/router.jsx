import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },{
    path: "news",
    element: <h1>This is News</h1>,
  },{
    path: "auth",
    element: <h1>This is Login</h1>,
  },{
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

export default router;
