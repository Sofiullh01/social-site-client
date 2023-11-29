import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Notification from "../Pages/Notification/Notification";
import Register from "../Pages/LoginRegister/Register";
import Login from "../Pages/LoginRegister/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<NotFoundPage/>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'notification',
            element: <Notification/>,
        }
      ]
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
  ]);

export default router;