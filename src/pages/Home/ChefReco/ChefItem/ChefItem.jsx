const ChefItem = ({ item }) => {
  const { price, image, recipe, name } = item || {};
  return (
    <div className='card card-compact  bg-base-100 shadow-xl text-center space-y-6'>
      <figure>
        <img src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='text-2xl text-center font-semibold'>{name}</h2>
        <p>{recipe}</p>
        <div className='card-actions justify-center'>
          <button className='btn border-b-2 border-b-yellow-700  text-[#BB8506] hover:bg-[#1F2937] my-8'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefItem;
