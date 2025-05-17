import { createBrowserRouter } from 'react-router';
import Users from '../components/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users></Users>,
  },
]);

export default router;