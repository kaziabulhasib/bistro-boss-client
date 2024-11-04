import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../assets/home/featured.jpg";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocailLogin/SocialLogin";
// import { useEffect } from "react";

const Signup = () => {
  const axiosPublic = useAxiosPublic();
  const [showPassword, SetShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loogedUser = result.user;
      console.log(loogedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to database");
              reset();
              toast.success("User Created Successfully!", {
                position: "top-right",
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed");
        });
    });
  };
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-semibold text-center my-6'>Register Now!</h1>
      <div className='card shrink-0 w-full max-w-lg  shadow-2xl bg-base-100'>
        {/* form start */}
        <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type='text'
              placeholder='Type Your Name'
              className='input input-bordered'
            />
            {errors.name && (
              <span className='mt-2 text-[12px] text-red-500'>
                Name is Required
              </span>
            )}
          </div>
          {/* PhotoURL  */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>photoURL</span>
            </label>
            <input
              {...register("photoURL", { required: true })}
              type='text'
              placeholder='photoURL'
              className='input input-bordered'
            />
            {errors.photoURL && (
              <span className='mt-2 text-[12px] text-red-500'>
                photoURL is Required
              </span>
            )}
          </div>
          {/* email  */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type='email'
              placeholder='Type Your Email'
              className='input input-bordered'
            />
            {errors.email && (
              <span className='mt-2 text-[12px] text-red-500'>
                Email is Required
              </span>
            )}
          </div>
          {/*  password */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              type={showPassword ? "text" : "password"}
              placeholder='Type password'
              className='input input-bordered'
            />
            <span onClick={() => SetShowPassword(!showPassword)}>
              {showPassword ? (
                <button className='btn btn-xs btn-outline mt-4'>hide</button>
              ) : (
                <button className='btn btn-xs btn-outline mt-4'>show</button>
              )}
            </span>
            {errors.password?.type === "required" && (
              <span className='mt-2 text-[12px] text-red-500'>
                Password is required
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className='mt-2 text-[12px] text-red-500'>
                Password must have atleast 6 character
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className='mt-2 text-[12px] text-red-500'>
                Password must have atleast one UpperCase letter,LowerCase
                letter,Number,Special character
              </span>
            )}
          </div>

          <div className='form-control mt-6'>
            <input className='btn ' type='submit' value='Register' />
          </div>
        </form>
        <p className='text-center mb-4 text-yellow-600'>
          <small>Already User? </small>

          <Link className='hover:text-green-600 hover:underline' to='/login'>
            Please Sign in{" "}
          </Link>
        </p>
        <div className='divider px-4'></div>
        <div>
          <p className='text-center mb-4 text-yellow-600'>
            Or Login with Google
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Signup;
