import { createBrowserRouter } from "react-router";
import AddCoffee from "../components/Coffee/AddCoffee";
import UpdateCoffee from "../components/Coffee/UpdateCoffee";
import App from '../App';
import Home from "../components/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
      loader: () => {
      return fetch("http://localhost:5000/coffee");
    },
    element: <Home></Home>,
  },  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },  {
    path: "updateCoffee",
    element: <UpdateCoffee></UpdateCoffee>,
  },{
    path: "/edit/:id",
    loader: async ({ params  }) => {
      const id = params.id;
      return fetch(`http://localhost:5000/coffee/${id}`);
    },
    element: <UpdateCoffee></UpdateCoffee>,
  }
]);

export default router;