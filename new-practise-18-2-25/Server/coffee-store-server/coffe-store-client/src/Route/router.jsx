import { createBrowserRouter } from "react-router";
import AddCoffee from "../components/Coffee/AddCoffee";
import UpdateCoffee from "../components/Coffee/UpdateCoffee";
import App from '../App';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },  {
    path: "updateCoffee",
    element: <UpdateCoffee></UpdateCoffee>,
  },
]);

export default router;