import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Laptops/MSI/Shop_Now_1500-x-300.jpg',
    },
    {
      url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Wireless/Meghana/iQOO/ChangeZ7/NoOffer/NewLaunch/D74387056_WLD---iQOO-Z7-5G--BAU---Design-SIM_1400x800Rev._CB592496396_.jpg',
    },
    
    {
      url: 'https://rukminim1.flixcart.com/fk-p-flap/844/140/image/982f877988b6f7a2.jpg?q=50',
    },
    
    {
      url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Wireless/tsabikhi/Itel-P40/GW/D75987963_INWLD_ItelP40_NewLaunch_1400x800_2._CB594490935_.jpg',
    },
    {
      url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img21/Wireless/ssserene/OP11R/GW/7thMar/D70855081_WLD_OnePlus_Udon_1400x800._CB595054840_.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };



  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    }, 2000);
    console.log("useEffect is running");
    return () => clearInterval(timer);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className='max-w-[1400px] h-[550px] w-full m-auto py-3 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => ( 
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
