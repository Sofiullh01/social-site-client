import { Link, useLocation, useNavigate } from "react-router-dom";
import registerImg from "../../assets/register.jpg";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import Social from "../../Shared/Social";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const asiosSecure = useAxiosSecure();

  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(username, email, photo, password);
  
    // createUser
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
  
        // post to database
        updateUserProfile(username, photo)
          .then(() => {
            toast.success("User created successfully");
            asiosSecure.post('/users', user) 
              .then(res => {
                console.log(res.data);
              })
              .catch(error => console.log(error));
            navigate(from, { replace: true });
          })
          .catch(error => console.log(error));
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
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
