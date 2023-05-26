import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/shared/ErrorPage/ErrorPage.jsx';
import MainBody from './components/layout/MainBody.jsx';
import Home from './components/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import AllToys from './components/AllToys/AllToys.jsx';
import MyToys from './components/MyToys/MyToys.jsx';
import AddAToy from './components/AddAToy/AddAToy.jsx';
import Login from './components/shared/Login/Login.jsx';
import Register from './components/shared/Register/Register.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import Details from './components/Details/Details.jsx';
import UpdateToy from './components/UpdateToy/UpdateToy.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
        // loader: ({ params }) => fetch('https://vroom-world-server.vercel.app/allToys'),
      },
      {
        path: "/myToys",
        element: <PrivateRoute><MyToys /></PrivateRoute>,
        // loader: ({ params }) => fetch(`https://vroom-world-server.vercel.app/myToys/${params.email}`),
      },
      {
        path: "/addAToy",
        element: <PrivateRoute><AddAToy /></PrivateRoute>,
      },
      {
        path: "/updateToy/:id",
        element: <PrivateRoute><UpdateToy /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://vroom-world-server.vercel.app/toy/${params.id}`),
      },
      {
        path: "/toy/:id",
        element: <PrivateRoute><Details /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://vroom-world-server.vercel.app/toy/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,

      },
      {
        path: "/register",
        element: <Register />,

      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

  //</React.StrictMode>,
)
