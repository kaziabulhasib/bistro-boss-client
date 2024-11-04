import { Link } from "react-router-dom";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import Cover from "../../shared/Cover/Cover";

const MenuCategory = ({ items, title, text, img }) => {
  return (
    <div className='my-14 '>
      {title && <Cover img={img} title={title} text={text}></Cover>}
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:mt-20 mt-4 max-w-7xl  mx-auto'>
        {items.slice(0, 6).map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className='flex flex-col items-center'>
        {/* <Link to={`/order/${title}`} className='btn btn-outline btn-secondary '>
          View Full Menu
        </Link> */}
        <Link
          to={`/order/${title}`}
          className='btn  border-b-2 border-b-yellow-700 my-8 text-yellow-700 hover:bg-gray-800'>
          View Full Menu
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
