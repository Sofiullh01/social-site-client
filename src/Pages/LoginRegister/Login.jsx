import { Link } from "react-router-dom";
import loginImg from "../../assets/login.jpg";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className=" hero  relative">
      <div className="hero-content flex-col md:flex-row relative">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card md:w-1/2 max-w-sm ">
          <form
            onSubmit={handleSubmit}
            className="card-body shadow-lg py-8 px-10 rounded-md bg-[#F9A31C]"
          >
            <h1 className="text-5xl font-bold text-center">log in</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary bg-[#1F4167]"
                type="submit"
                value="Log In"
              />
            </div>
            <p className="mx-auto ">
              <small>
                New Here?{" "}
                <Link className="font-medium" to="/register">
                  Register
                </Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
