import { getAuth } from 'firebase/auth';
import './App.css';
import app from './firebase/firebase.init';
import RegisterReactBootstarp from './components/RegisterReactBootstarp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import LoginBootstarp from './components/LoginBootstarp';
import ResetPasswordPage from './components/ResetPasswordPage';

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

      } ,  
      {
        path: '/resetPasswordPage',
        element: <ResetPasswordPage></ResetPasswordPage>

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
