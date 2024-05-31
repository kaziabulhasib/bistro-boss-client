import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaPencil } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();

  const axiosSecure = useAxiosSecure();

  if (loading) {
    return (
      <div>
        <h1>Loading........</h1>
      </div>
    );
  }
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} deleted`,
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle
        title='MANAGE ALL ITEMS'
        text='---Hurry Up!---'></SectionTitle>
      <div>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th>#</th>

                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='mask mask-squircle w-12 h-12'>
                          <img src={item.image} alt={`${item.name}`} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <Link to={`/dashboard/updateitem/${item._id}`}>
                      <FaPencil className='bg-yellow-600 text-4xl text-white p-2 cursor-pointer '></FaPencil>
                    </Link>
                  </th>
                  <th>
                    <FaTrash
                      onClick={() => handleDeleteItem(item)}
                      className='bg-red-600 text-3xl text-white p-2 cursor-pointer '></FaTrash>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
