import { useContext, useEffect, useState } from "react";
import login from "../../assets/home/banner.jpg";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialLogin from "../../Components/SocailLogin/SocialLogin";
// import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
// import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log("state in the location:", location.state);

  const { signIn } = useContext(AuthContext);
  const [showPassword, SetShowPassword] = useState(false);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const user = { email, password };
    // console.log(user);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      toast.success("Signin Successful");
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  // Github login

  // const handleGithubLogin = async () => {
  //   try {
  //     await signInWithGithub();
  //     toast.success("Signin Successful");
  //     navigate(from, { replace: true });
  //   } catch (err) {
  //     toast.error("err?.message");
  //   }
  // };
  // Facebook login

  // const handleFacebookLogin = async () => {
  //   try {
  //     await signInWithFacebok();
  //     toast.success("Signin Successful");
  //     navigate(from, { replace: true });
  //   } catch (err) {
  //     toast.error("err?.message");
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row items-center justify-evenly px-24'>
          <div className='text-center lg:text-left  flex-1'>
            {/* <h1 className='text-5xl font-bold'>Login now!</h1> */}
            <img className='w-3/4' src={login} alt='' />
          </div>
          {/* right side */}
          <div className='flex-1 -mt-16'>
            <h1 className='text-3xl font-semibold text-center my-6'>
              Login now!
            </h1>
            <div className='card shrink-0 w-full max-w-lg  shadow-2xl bg-base-100'>
              {/* form start */}
              <form onSubmit={handleLogin} className='card-body'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    name='email'
                    type='email'
                    placeholder='email'
                    className='input input-bordered'
                    required
                  />
                </div>
                <div className='form-control relative'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    name='password'
                    type={showPassword ? "text" : "password"}
                    placeholder='password'
                    className='input input-bordered'
                    required
                  />
                  {/* <span
                    className='absolute top-14 right-3'
                    onClick={() => SetShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span> */}
                  <span onClick={() => SetShowPassword(!showPassword)}>
                    {showPassword ? (
                      <button className='btn btn-xs btn-outline mt-4'>
                        hide
                      </button>
                    ) : (
                      <button className='btn btn-xs btn-outline mt-4'>
                        show
                      </button>
                    )}
                  </span>
                </div>
                {/* captcha  */}
                <div className='form-control'>
                  <label className='label'>
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    name='captcha'
                    type='text'
                    placeholder='Type  Captcha above'
                    className='input input-bordered'
                    required
                  />
                </div>
                <div className='form-control mt-6'>
                  <input
                    disabled={disabled}
                    className='btn btn-primary'
                    type='submit'
                    value='Login'
                  />
                </div>
              </form>
              <p className='text-center mb-4 text-yellow-600'>
                <small>New User?</small>{" "}
                <Link
                  className='hover:underline hover:text-green-600'
                  to='/signup'>
                  Create New Account
                </Link>
              </p>
              <div className='divider px-4'></div>
              {/* <div>
                <p className='text-2xl text-center font-semibold'>
                  Or login with
                </p>
                <div className='flex gap-8 justify-around my-6'>
                  <div>
                    <FaGoogle
                      onClick={handleGoogleLogin}
                      className='text-4xl border  hover:bg-slate-600 hover:text-white  cursor-pointer '
                    />
                  </div>
                  <div>
                    <FaFacebookF
                      onClick={handleFacebookLogin}
                      className='text-4xl  hover:bg-slate-600 hover:text-white cursor-pointer  border'
                    />
                  </div>
                  <div>
                    <FaGithub
                      onClick={handleGithubLogin}
                      className='text-4xl border  hover:bg-slate-600 hover:text-white  cursor-pointer'
                    />
                  </div>
                </div>
              </div> */}
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
