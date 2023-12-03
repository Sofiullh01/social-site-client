import { FcGoogle, FcAddressBook } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxionOpne from "../Hooks/useAxionOpne";

const Social = () => {
  const { googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosOpen = useAxionOpne();

  const from = location.state?.from?.pathname || "/";
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          email: result.user?.email,
          photo:result.user?.photoURL,
          username:result.user?.displayName,
        };
        axiosOpen.post("/users",userInfo)
        .then(res=>{
          console.log(res.data)
        })
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center gap-5 text-3xl">
        <p onClick={handleGoogle}>
          <FcGoogle />
        </p>
        <p>
          <FcAddressBook />
        </p>
      </div>
    </>
  );
};

export default Social;
