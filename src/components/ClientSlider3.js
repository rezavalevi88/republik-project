import React from 'react';
// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'
// import swiper styles
import 'swiper/css'

const ClientSlider3 = ({clients}) => {
  return (
    <Swiper slidesPerView={1} spaceBetween={30}
    grabCursor={true} loop={true} breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },

      640: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 35
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }}>
      {clients.map((clients,index) => {
      // destructure client
      const {image,imgporto, borderColor, name, position} = clients;
      // slide
      return (
        <SwiperSlide 
        id='p1'
        key={index}
        style={{borderColor : borderColor}}
        className='border-b-[0.625rem] rounded-[1.25rem] 
        w-full mx-auto lg:max-w-[18.75rem] 
        md:max-w-[18.75rem] sm:max-w-[18.75rem]
        xl:max-w-[21.875rem] shadow-lg overflow-hidden mb-[1.5rem]'
        >
          
          <div className='relative w-full mx-auto lg:max-w-[18.75rem] 
          md:max-w-[18.75rem] sm:max-w-[18.75rem] m:max-h-[14rem]
          xl:max-w-[21.875rem] h-[15.625rem] xl:max-h-[15.625rem] rounded-[0.75rem] 
          bg-bg1'>
          {/* card */}
            {/* person message
            <div>{message}</div>
            person name, img & position */}
              <img className='rounded-xl px-[0.75rem] pt-[1rem]' src={imgporto} alt=''/>
          <div className=''>
              <div className='flex gap-4 mt-[0.75rem] items-center justify-center'>
              <img className='w-[2.25rem]' src={image} alt='' />
              <div className='font-black'>{name}</div>
              <div className='text-gray1 font-semibold italic'>{position}</div>
              </div>
              </div>
          </div>
        </SwiperSlide>
      )
      })}
    </Swiper>
  )
};

export default ClientSlider3 ;
