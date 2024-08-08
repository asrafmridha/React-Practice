import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './componenets/layout/Main';
import Home from './componenets/Home';
import Register from './componenets/Register';
import Login from './componenets/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      }, {
        path: '/register',
        element: <Register></Register>
      }, {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
