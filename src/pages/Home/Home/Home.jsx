import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefReco from "../ChefReco/ChefReco";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div className='top-0'>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <ChefReco></ChefReco>
      <Featured></Featured>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
