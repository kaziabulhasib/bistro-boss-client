import {
  FaBook,
  FaCalendarAlt,
  FaCartArrowDown,
  FaClock,
  FaHome,
  FaList,
  FaSearch,
  FaUtensils,
} from "react-icons/fa";
import { FaEnvelope, FaPeopleGroup } from "react-icons/fa6";

import { MdOutlineRateReview } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // to do: Get admin info from data base
  const [isAdmin] = useAdmin();
  return (
    <div className='flex'>
      <div className='w-64 bg-orange-400 min-h-screen'>
        <ul className='menu p-4 space-y-6'>
          {isAdmin ? (
            <>
              <li>
                <NavLink to='/dashboard/adminhome'>
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/additems'>
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/manageitems'>
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/cart'>
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/users'>
                  <FaPeopleGroup></FaPeopleGroup>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to='/dashboard/userhome'>
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/cart'>
                  <FaCalendarAlt></FaCalendarAlt>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/cart'>
                  <FaCartArrowDown></FaCartArrowDown>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/cart'>
                  <MdOutlineRateReview />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/paymenthistory'>
                  <FaClock></FaClock>
                  Payment history
                </NavLink>
              </li>
            </>
          )}
          {/* shared navlinks */}

          <div className='divider'></div>
          <li>
            <NavLink to='/'>
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/order/salads'>
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/order/contact'>
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='flex-1'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
