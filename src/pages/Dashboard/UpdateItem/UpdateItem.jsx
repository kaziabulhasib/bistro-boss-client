import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import { register } from "swiper/element";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const item = useLoaderData();

  // console.log({ item });
  // console.log(item);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
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
      // console.log(menuItem);
      const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
      console.log(menuRes);
      if (menuRes.data.modifiedCount) {
        reset();
        Swal.fire({
          position: "middle",
          icon: "success",
          title: `${data.name} updated to menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    // console.log("with image url", res.data);
  };
  return (
    <div>
      {" "}
      <div>
        <SectionTitle text='correct now' title='Update an item'></SectionTitle>
        <div className='text-center'>
          <form
            className='px-8 bg-gray-100 ml-16 p-6 my-6 '
            onSubmit={handleSubmit(onSubmit)}>
            <label className='form-control w-full my-4 '>
              <span className='label-text my-4 text-xl font-semibold'>
                Recipe name*
              </span>

              <input
                defaultValue={item.name}
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
                  defaultValue={item.category}
                  {...register("category", { required: true })}
                  className='select select-bordered w-full'>
                  <option disabled>Choose a category</option>
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
                  defaultValue={item.price}
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
                defaultValue={item.recipe}
                {...register("recipe", { required: true })}
                placeholder='Recipe'
                className='textarea textarea-bordered textarea-lg w-full '></textarea>
            </label>
            <div className='form-control w-full my-4 '>
              <input
                // defaultValue={item.image}
                {...register("image", { required: true })}
                type='file'
                className='file-input w-full max-w-xs'
              />
            </div>

            <div className='w-full  text-center'>
              <button className='btn w-1/2 bg-yellow-600 hover:bg-yellow-700 text-white capitalize '>
                update Item details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
