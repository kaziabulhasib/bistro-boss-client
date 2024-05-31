import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
// import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // google log in
  const handleGoogleLogin = async () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      const userINfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userINfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });

    // try {
    //   await signInWithGoogle();
    //   toast.success("Signin Successful");
    //   //   Navigate(from, { replace: true });
    // } catch (err) {
    //   console.log(err);
    //   toast.error(err?.message);
    // }
  };
  return (
    <div className='p-8'>
      <button onClick={handleGoogleLogin} className='btn mx-6 '>
        <FaGoogle className='text-xl'></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
