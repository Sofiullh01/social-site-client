import { FcGoogle, FcAddressBook } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
  const { googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, errorCode);
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
