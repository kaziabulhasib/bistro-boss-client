import FoodCard from "../../../Components/FoodCard/FoodCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const chunkedItems = chunkArray(items, 6);
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        // className='h-auto'
        slidesPerView={1}>
        {chunkedItems.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className=' grid md:grid-cols-3 grid-cols-1 gap-4 mt-6 mb-16 mx-4 '>
              {chunk.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
