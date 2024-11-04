import { Parallax } from "react-parallax";

const Cover = ({ img, title, text }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt='the menu'
      strength={-200}>
      <div className='hero lg:h-[700px] h-[450px]'>
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md font-cini'>
            <h1 className='mb-5 text-5xl font-bold'>{title}</h1>
            <p className='text-2xl'>{text}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
