import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // to do: upload the image to imgbb & get an url
    const imageFile = { image: data.image[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "middle",
          icon: "success",
          title: `${data.name} added to menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };
  return (
    <div>
      <SectionTitle text="what's new" title='Add an item'></SectionTitle>
      <div>
        <form className='px-8' onSubmit={handleSubmit(onSubmit)}>
          <label className='form-control w-full my-4 '>
            <span className='label-text my-4 text-xl font-semibold'>
              Recipe name*
            </span>

            <input
              {...register("name", { required: true })}
              type='text'
              placeholder='Recipie name'
              className='input input-bordered w-full '
            />
          </label>

          <div className='flex gap-4 '>
            <label className='form-control w-full my-4 '>
              <span className='label-text my-4 text-xl font-semibold'>
                Category*
              </span>

              <select
                defaultValue='default'
                {...register("category", { required: true })}
                className='select select-bordered w-full'>
                <option disabled value='default'>
                  Choose a category
                </option>
                <option>Salad</option>
                <option>Pizza</option>
                <option>Soups</option>
                <option>Dessert</option>
                <option>Drinks</option>
              </select>
            </label>

            {/*  */}
            <label className='form-control w-full my-4 '>
              <span className='label-text my-4 text-xl font-semibold'>
                Price*
              </span>

              <input
                {...register("price", { required: true })}
                type='number'
                placeholder='Price'
                className='input input-bordered w-full '
              />
            </label>
          </div>
          {/* text area */}

          <label className='form-control w-full my-4 '>
            <span className='label-text my-4 text-xl font-semibold'>
              Recipe Details*
            </span>

            <textarea
              {...register("recipe", { required: true })}
              placeholder='Recipie'
              className='textarea textarea-bordered textarea-lg w-full '></textarea>
          </label>
          <div className='form-control w-full my-4 '>
            <input
              {...register("image", { required: true })}
              type='file'
              className='file-input w-full max-w-xs'
            />
          </div>

          <button className='btn bg-yellow-600 hover:bg-yellow-700 text-white'>
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
