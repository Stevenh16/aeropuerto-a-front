import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/login.js';
import Signup from './pages/signup.js';
import Home from './pages/home.js';

const router = createBrowserRouter(
  [
    {path: "/", element: <Login/>},
    {path: "/login", element: <Login />},
    {path: "/signup", element: <Signup/>},
    {path: "/home", element: <Home/>},
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
