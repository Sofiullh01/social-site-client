import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Notification from "../Pages/Notification/Notification";

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
  ]);

export default router;