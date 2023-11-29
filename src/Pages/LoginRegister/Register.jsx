import { Link } from "react-router-dom";
import registerImg from "../../assets/register.jpg";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      
      <div className="flex justify-center items-center gap-4">
        <div className="w-3/6 ">
          <form onSubmit={handleSubmit} className="space-y-6 shadow-lg py-8 px-10 rounded-md bg-[#beeffa]">
          <h1 className="text-5xl font-bold text-center">Register</h1>
            <div className="flex justify-center items-center gap-4">
              <div className="bo">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Your Name"
                className="mt-1 p-2 w-full border rounded-md lg:w-64"
              />
              </div>
              <div>
              <label
                htmlFor="E-mail"
                className="block text-sm font-medium text-gray-700"
              >
                User E-mail
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter Your E-mail"
              />
              </div>
            </div>

            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo URL
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Enter Photo URL"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
            <p className=' -mt-6 flex justify-end items-end'><small>New Here? Please <Link className='font-medium'
           to='/register'>Register</Link></small></p>
          </form>
          
        </div>
        <div className="w-1/2 ">
          <img src={registerImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Register;
