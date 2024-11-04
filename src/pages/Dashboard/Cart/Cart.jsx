import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import CartRow from "../CartRow/CartRow";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => {
    console.log(item.price);
    return total + (item.price || 0);
  }, 0);
  return (
    <div>
      <div className='flex justify-evenly my-12'>
        <h1 className='text-xl lg:text-3xl font-semibold'>
          Total orders: {cart.length}
        </h1>
        <h1 className='text-xl lg:text-3xl font-semibold'>
          Total price:{totalPrice}
        </h1>
        {cart.length ? (
          <Link to='/dashboard/payment'>
            <button className='btn btn-primary'>Pay</button>
          </Link>
        ) : (
          <button disabled className='btn btn-primary '>
            Pay
          </button>
        )}
      </div>
      {/* table  */}
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <CartRow key={item._key} item={item} index={index}></CartRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
