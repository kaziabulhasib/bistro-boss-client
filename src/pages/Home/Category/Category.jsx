import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <div>
      <SectionTitle
        text='---From 11:00am to 10:00pm---'
        title='ORDER ONLINE'></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper my-12'>
        <SwiperSlide>
          <img src={slide1} alt='' />
          <h2 className='text-3xl uppercase text-white text-center -mt-16 font-cini'>
            Salad
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt='' />
          <h2 className='text-3xl uppercase text-white text-center -mt-16 font-cini'>
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt='' />
          <h2 className='text-3xl uppercase text-white text-center font-cini -mt-16'>
            Pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt='' />
          <h2 className='text-3xl uppercase text-white text-center font-cini -mt-16'>
            Deserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt='' />
          <h2 className='text-3xl uppercase text-white text-center font-cini -mt-16'>
            Salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
