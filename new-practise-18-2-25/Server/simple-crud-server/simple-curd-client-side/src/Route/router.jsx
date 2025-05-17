import { createBrowserRouter } from "react-router";
import Users from "../components/Users";
import Update from "../components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return fetch("http://localhost:5000/users");
    },
    element: <Users></Users>,
  },
  {
    path: "/edit/:id",
    loader: async ({ params  }) => {
      const id = params.id;
      return fetch(`http://localhost:5000/users/${id}`);
    },
    element: <Update></Update>,
  },
]);

export default router;
