import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { price, image, recipe, name, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddtoCart = () => {
    // send data to server
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          toast.success("item added sucessfully");

          // refetch the data to update cart
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Please log in?",
        text: "You will be logged in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className='card  card-compact  bg-base-100 shadow-xl text-center space-y-6'>
      <figure>
        <img src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <p className='bg-gray-800 text-white absolute top-4 right-9 p-1'>
          ${price}
        </p>
        <h2 className='text-2xl text-center font-semibold'>{name}</h2>
        <p>{recipe}</p>
        <div className='card-actions justify-center'>
          <button
            onClick={handleAddtoCart}
            className='btn  border-b-2 border-b-yellow-700 my-8 text-yellow-700 hover:bg-gray-800'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
