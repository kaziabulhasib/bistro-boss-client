// import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
// import { data } from "autoprefixer";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className='text-center my-14'>
      <SectionTitle
        text='---Check it out---'
        title='FROM OUR MENU'></SectionTitle>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className='btn btn-outline border-0 border-b-[3px] text-xl'>
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
