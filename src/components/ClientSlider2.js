import React from 'react';
// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'
// import swiper styles
import 'swiper/css'

const ClientSlider2 = ({clients}) => {
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
      const {image,imgporto, borderColor, name} = clients;
      // slide
      return (
        <SwiperSlide 
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
              <img className='pt-[0.85rem]' src={imgporto} alt=''/>
          <div>
              <div className='flex gap-4 items-center justify-center pt-[0.15rem]'>
              <img className='w-[2.25rem]' src={image} alt='' />
              <div className='font-black'>{name}</div>
              </div>
          </div>
          </div>
        </SwiperSlide>
      )
      })}
    </Swiper>
  )
};

export default ClientSlider2;
