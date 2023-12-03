import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import Notification from "../Pages/Notification/Notification";
import Register from "../Pages/LoginRegister/Register";
import Login from "../Pages/LoginRegister/Login";
import Dashbord from "../Layout/Dashbord";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import AddPost from "../Pages/AddPost/AddPost";
import MyPosts from "../Pages/MyPosts/MyPosts";
import ManageUser from "../Pages/ManageUser/ManageUser";

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
            element:<PrivateRoute><Notification/></PrivateRoute>,
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
    {
      path: '/dashbord',
      element:<PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
      children:[
        {
          path: "/dashbord/profile",
          element: <Profile></Profile>
        },
        {
          path: "/dashbord/addaost",
          element: <AddPost></AddPost>,
        },
        {
          path: "/dashbord/myposts",
          element: <MyPosts></MyPosts>
        },

        // admin route
        {
          path: '/dashbord/manageuser',
          element: <ManageUser></ManageUser>
        }
      ]
    }
  ]);

export default router;