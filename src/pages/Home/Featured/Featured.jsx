import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
// import bgImg from "../../../assets/home/chef-service.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    // <div className={`bg-[url(${bgImg})]`}>
    <div className='featured text-white bg-fixed'>
      <div className='pt-12'>
        <SectionTitle
          text='---Check it out---'
          title='FROM OUR MENU'></SectionTitle>
      </div>
      <div className='flex justify-center items-center px-36 py-20 gap-16'>
        <div>
          <img src={featured} alt='' />
        </div>
        <div>
          <h3 className='text-xl'>March 20, 2023</h3>
          <h4 className='text-[24px]'>WHERE CAN I GET SOME?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className='btn btn-outline  outline-white border-white border-2 text-white font-medium text-xl'>
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
