import { useEffect, useState } from "react";
import ChefItem from "./ChefItem/ChefItem";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ChefReco = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredItem = data
          .filter((item) => item.category === "salad")
          .slice(0, 3);
        setMenu(filteredItem);
        console.log(menu);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        text='---Check it out---'
        title="chef's choice"></SectionTitle>
      <div className='flex gap-6 my-8'>
        {menu.map((item) => (
          <ChefItem key={item._id} item={item}></ChefItem>
        ))}
      </div>
    </div>
  );
};

export default ChefReco;
