import { Link, useLocation, useNavigate } from "react-router-dom";
import registerImg from "../../assets/register.jpg";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import Social from "../../Shared/Social";
import useAxionOpne from "../../Hooks/useAxionOpne";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosOpen = useAxionOpne();

  const from = location.state?.from?.pathname || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
  
  
    try {
      // Create user
      const userCredential = await createUser(email, password);
      const user = userCredential.user;
      console.log('User signed up:', user);
  
      // Update  profile
      await updateUserProfile(username, photo);
  
      // Post user  to the database
      const userInfo = {
        username,
        email,
        photo,
      };
  
      const response = await axiosOpen.post("/users", userInfo);
  
      console.log('User added to the database:', response.data);
  
      if (response.data.insertedId) {
        toast.success("User created successfully");
        navigate(from, { replace: true });
      }
    } catch (error) {
      // Handle specific error scenarios
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email is already in use.');
      } else if (error.code === 'auth/weak-password') {
        toast.error('Password is too weak.');
      } else {
        toast.error('An error occurred. Please try again.');
      }
  
      console.error('Error:', error);
    }
  };
  

  return (
    <>
      <div className="flex justify-center items-center gap-4 lg:h-screen">
        <div className="w-3/6 ">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 shadow-lg py-8 px-10 rounded-md bg-[#63BDFB]"
          >
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
            <p className=" -mt-6 flex justify-end items-end">
              <small>
                Have an accont? Please{" "}
                <Link className="font-medium" to="/login">
                  Login
                </Link>
              </small>
            </p>
            <Social></Social>
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
