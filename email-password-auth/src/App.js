import { getAuth } from 'firebase/auth';
import './App.css';
import app from './firebase/firebase.init';
import RegisterReactBootstarp from './components/RegisterReactBootstarp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import LoginBootstarp from './components/LoginBootstarp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstarp></RegisterReactBootstarp>

      },
      {
        path: '/',
        element: <RegisterReactBootstarp></RegisterReactBootstarp>

      }   ,  
      {
        path: '/register',
        element: <RegisterReactBootstarp></RegisterReactBootstarp>

      } ,  
      {
        path: '/login',
        element: <LoginBootstarp></LoginBootstarp>

      }
    ]
  }

]);
function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
