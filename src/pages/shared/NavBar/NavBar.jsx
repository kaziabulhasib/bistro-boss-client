import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        navigate("/");
        toast.success("Logout Successful");
      })
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/menu'>Menu</Link>
      </li>
      <li>
        <Link to='/order/salads'>Order</Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link to='/dashboard/adminhome'>Admin home</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to='/dashboard/userhome'>User home</Link>
        </li>
      )}
      <li>
        <Link to='/dashboard/cart'>
          <button className='btn'>
            <FaCartShopping className='text-xl' />
            <div className='badge badge-secondary'>+ {cart.length}</div>
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <div className='navbar  fixed z-10 shadow-lg px-4 top-0 text-white font-extrabold text-xl  bg-[#15151580] opacity-90 max-w-7xl'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
            {links}
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost text-xl'>
          Bistro Boss
        </Link>
      </div>
      <div className='navbar-center hidden items-center  lg:flex'>
        <ul className='menu lg:flex items-center menu-horizontal px-1'>
          {links}
        </ul>
      </div>
      <div className='navbar-end lg:flex items-center'>
        {user ? (
          <>
            <div className='dropdown dropdown-end mr-8  '>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className=''>
                  <img
                    className='w-16 h-16 rounded-full border-2 bg-white border-red-300'
                    src={user?.photoURL}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow rounded-box w-52 bg-gray-700 '>
                <li>
                  <button className='btn btn-sm  btn-ghost text-base font-medium  my-2'>
                    {user?.displayName || "user name not found"}
                  </button>
                  {/* log out   */}
                  <Link onClick={handleLogout} to='/register' className='btn'>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link
              className='btn btn-sm glass text-slate-200 hover:text-slate-500 '
              to='/login'>
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
