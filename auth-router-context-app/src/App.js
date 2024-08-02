import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './componenets/layout/Main';

const router= createBrowserRouter([
{
  path: '/',
  element : <Main></Main>
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
