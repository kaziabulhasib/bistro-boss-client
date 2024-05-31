import { Helmet } from "react-helmet";
import Cover from "../../shared/Cover/Cover";
import bgImg from "../../../assets/menu/MenuBg2.png";
// import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import PizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupsImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        img={bgImg}
        title='Our menu'
        text='Would you like to try a dish?'></Cover>
      <SectionTitle
        text="---Don't miss---"
        title="TODAY'S OFFER"></SectionTitle>
      {/* Today's offer */}
      <MenuCategory items={offered}></MenuCategory>
      {/* deserts */}
      <MenuCategory
        items={desserts}
        title='deserts'
        text='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur voluptatibus itaque quaerat eaque asperiores! '
        img={desertImg}></MenuCategory>
      <MenuCategory
        items={pizzas}
        title='pizzas'
        text='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur voluptatibus itaque quaerat eaque asperiores! '
        img={PizzaImg}></MenuCategory>
      {/* salads */}
      <MenuCategory
        items={salads}
        title='salads'
        text='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur voluptatibus itaque quaerat eaque asperiores! '
        img={saladImg}></MenuCategory>
      {/* soups */}
      <MenuCategory
        items={soups}
        title='soups'
        text='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur voluptatibus itaque quaerat eaque asperiores! '
        img={soupsImg}></MenuCategory>
    </div>
  );
};

export default Menu;
