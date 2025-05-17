import { createBrowserRouter } from 'react-router';
import Users from '../components/Users';

const router = createBrowserRouter([
  {
    path: "/",
    loader : ()=>{
      return fetch('http://localhost:5000/users');
    },
    element: <Users></Users>,
  },
]);

export default router;