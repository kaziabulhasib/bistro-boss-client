import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const [cart] = useCart();
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
      <li>
        <Link to='/secret'>Secret</Link>
      </li>
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
    <div className='navbar fixed z-10 shadow-lg px-4 top-0 text-white font-extrabold text-xl bg-[#15151580] opacity-90 max-w-7xl'>
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
      <div className='navbar-center hidden items-center lg:flex'>
        <ul className='menu lg:flex items-center menu-horizontal px-1'>
          {links}
        </ul>
      </div>
      <div className='navbar-end lg:flex items-center'>
        {user ? (
          <div className='relative group'>
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div>
                  <img
                    className='w-16 h-16 rounded-full border-2 bg-white border-red-300'
                    src={user?.photoURL}
                  />
                </div>
              </label>
              <div className='dropdown-content mt-2 p-2 shadow rounded-box w-52 bg-gray-700 hidden group-hover:block'>
                <p className='text-base font-medium my-2 text-white'>
                  {user?.displayName || "user name not found"}
                </p>
                <button onClick={handleLogout} className='btn btn-ghost'>
                  Log out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link
            className='btn btn-sm glass text-slate-200 hover:text-slate-500'
            to='/login'>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
