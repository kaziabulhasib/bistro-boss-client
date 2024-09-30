import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { RiDoubleQuotesL } from "react-icons/ri";

const Reviews = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-tau-umber.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        text='---What Our Clients Say---'
        title='Testimonials'></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className='mySwiper py-16 '>
        {review.map((r) => (
          <SwiperSlide key={r._id}>
            <div className='m-24 flex flex-col justify-center items-center space-y-8'>
              <RiDoubleQuotesL className='text-7xl font-bold ' />
              <Rating style={{ maxWidth: 180 }} value={r.rating} readOnly />
              <p>{r.details}</p>
              <h1 className='text-center text-2xl text-yellow-600 my-6'>
                {r.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
