const MenuItem = ({ item }) => {
  const { price, image, recipe, name } = item || {};
  return (
    <div className='flex items-start justify-between gap-8 my-6 px-4'>
      <div>
        <img
          className='w-24 lg:w-40 h-16 lg:h-28 '
          style={{ borderRadius: "0px 120px 120px 120px" }}
          src={image}
          alt=''
        />
      </div>
      <div>
        <h1 className='text-xl mb-2 font-cini'>{name}------------------</h1>
        <p className='w-3/4 '>{recipe}</p>
      </div>
      <div>
        <p className='text-yellow-600'>{price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
