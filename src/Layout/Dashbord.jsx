
import { FcBusinessman,FcPlus,FcNews,FcMenu,FcHome, } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import { IoVolumeMedium } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";
import Welcome from "../Shared/Welcome";

const Dashbord = () => {
  // to do
  const [isAdmin] = useAdmin();
  return (
    <div className="flex gap-8">
      <div className="w-60 min-h-screen bg-gray-300">
      <div className="lg:pl-8 text-3xl  font-Cinzel font-extrabold btn-ghost normal-case rounded-md px-2">
            <p className="text-pink-600">
              THINK <span className="text-white">UP</span>
              <span className="block text-lg font-normal tracking-widest text-black">
                Shere Thoughts
              </span>
            </p>
          </div>
        <ul className="font-semibold menu p-4 space-y-3 ">
          {
            isAdmin ?<>
            <li>
            <NavLink className="flex" to="/dashbord/profile">
              <FcBusinessman className="text-3xl"/>
              Admin Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="flex" to="/dashbord/manageuser">
              <FaUsers className="text-3xl"/>
              Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink className="flex" to="/dashbord/myposts">
              <FcNews className="text-3xl"/>
              Reported Comments
            </NavLink>
          </li>
          <li>
            <NavLink className="flex" to="/dashbord/myposts">
              <IoVolumeMedium className="text-3xl"/>
              Make Announcement
            </NavLink>
          </li>
            </>
            
            : <>
            <li>
            <NavLink className="flex" to="/dashbord/profile">
              <FcBusinessman className="text-3xl"/>
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="flex" to="/dashbord/addaost">
              <FcPlus className="text-3xl"/>
              Add Post
            </NavLink>
          </li>
          <li>
            <NavLink className="flex" to="/dashbord/myposts">
              <FcNews className="text-3xl"/>
              My Posts
            </NavLink>
          </li>
            </>
          }
          <div className=" divider"></div>
          <li>
            <NavLink className="flex" to="/">
              <FcHome className="text-3xl"/>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="flex" to="/order/salad">
              <FcMenu className="text-3xl"/>
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
        <Welcome></Welcome>
      </div>
    </div>
  );
};

export default Dashbord;
