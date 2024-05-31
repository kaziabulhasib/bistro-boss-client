import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // delte handle
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${user.name} is deleted!`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  // amdin handle

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();

        Swal.fire({
          title: "Deleted!",
          text: `${user.name} is admin now!`,
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div className='flex justify-evenly my-4'>
        <h2 className='text-3xl'>All users</h2>
        <h2 className='text-3xl'>Total users:{users.length}</h2>
      </div>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <FaUsers
                      onClick={() => handleMakeAdmin(user)}
                      className='bg-yellow-600 text-4xl text-white p-2 cursor-pointer '></FaUsers>
                  )}
                </td>
                <td>
                  <FaTrash
                    onClick={() => handleDelete(user)}
                    className='bg-red-600 text-3xl text-white p-2 cursor-pointer '></FaTrash>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;