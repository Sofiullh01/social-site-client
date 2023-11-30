import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const NavBar = () => {
  const {user,logOut} = useAuth();
  const handleLogOut = ()=>{
    console.log('click')
    logOut()
    .then(() => {
      toast.success('User sign out')
    }).catch((error) => {
      console.log(error)
    });
  }
  const navLinks = (
    <>
      <li className="font-medium">
        <Link to="/">Home</Link>
      </li>
      <li className="font-medium">
        <Link to="">Membership</Link>
      </li>
      {
        !user && <li className="font-medium">
        <Link to="/register">Join US</Link> 
      </li>
      }
      <li className="font-medium">
        <Link to='/notification'>
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item">+0</span>
            </div>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar  bg-gray-400 z-10 bg-opacity-40 max-w-6xl justify-evenly">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="lg:pl-8 text-3xl  font-Cinzel font-extrabold btn-ghost normal-case rounded-md px-2">
            <Link className="text-pink-600">
              THINK <span className="text-white">UP</span>
              <span className="block text-lg font-normal tracking-widest text-black">
                Shere Thoughts
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        {
          user && <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
            <li>
            {user.displayName}
            </li>
            <li>
              <Link to='/dashbord'>Dashboard</Link>
            </li>
            <button className="btn" onClick={handleLogOut}>Logout</button>
          </ul>
        </div>
        }
      </div>
    </>
  );
};

export default NavBar;
