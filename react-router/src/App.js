import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Main from './layouts/Main';
import Products from './components/Products/Products';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Post from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        { path: '/home', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        { path: '/products', element: <Products></Products> },
        {
          path: '/friends',
          element: <Friends></Friends>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users`);
          },
        },
        {
          path: 'friend/:friendID',
          element: <FriendDetails></FriendDetails>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`);
          },
        },
        {
          path: 'posts',
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/posts`);
          },
          element: <Post></Post>
        },
        {
          path: '/post/:useId',
          element: <PostDetails></PostDetails>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.useId}`)
          }
        },{
          path: '/countries',
          loader: async () => {
            return fetch(`https://restcountries.com/v3.1/all`);
          },
          element: <Countries></Countries>
        },
        {
          path: '/country/:countryId',
          element: <Country></Country>,
          loader: async ({ params }) => {
            return fetch(`https://restcountries.com/v3.1/name/${params.countryId}`)
          }
        },
      ]
    },
    { path: '*', element: <div>404 Not Found!</div> }

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
