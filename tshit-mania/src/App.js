import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Order from './components/Order/Order';
import Home from './components/Home/Home';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          loader : async ()=>fetch('tshirts.json'),
          element: <Home></Home>
        },
        {
          path: "/order",
          element: <Order></Order>
        },
        {
          path: "/grandpa",
          element: <Grandpa></Grandpa>
        }

      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
