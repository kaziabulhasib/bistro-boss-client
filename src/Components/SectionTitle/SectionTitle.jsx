const SectionTitle = ({ title, text }) => {
  return (
    <div>
      <p className='text-center w-1/3 pb-4 mx-auto text-[#D99904] text-xl my-10 italic border-b-4 border-[#E8E8E8]'>
        {text}
      </p>
      <h1 className='text-center capitalize border-b-4 border-[#E8E8E8] pb-6 mx-auto w-1/2 text-black text-4xl l'>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
