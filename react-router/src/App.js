import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';

function App() {
  const router =createBrowserRouter([
    {path : '/' , element : <Header></Header>},
    {path : '/home' , element : <Home></Home>},
    {path : '/about' , element : <About></About>},
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
