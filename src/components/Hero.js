import React from 'react';
// import data
import {hero} from '../data';
// import icons
// import {HiOutlineChevronDown} from 'react-icons/hi';
import wa from'../img/hero/wa1.png'

const Hero = () => {
  // destructure hero data
  const { title, subtitle, btnText, compText, image}
  = hero;
  return (
    <section id='hero' className='min-h-[40rem] pt-[7rem] pb-[0rem]'>
      <div className='container mx-auto min-h[56.25rem] flex
      justify-center items-center'>
        <div className='flex flex-col lg:gap-x-[1.875rem]
        gap-y-8 lg:gap-y-0 lg:flex-row items-center
        justify-center text-center lg:text-left'>
          {/* text */}
          <div className='flex-1'>
            <h1 
            className='title mb-2 lg:mb-5'
            data-aos='fade-down'
            data-aos-delay='200'
            >
              {title}</h1>
            <p className='lead mb-5 lg:mb10'
            data-aos='fade-down'
            data-aos-delay='400'
            >
              {subtitle}
              </p>
            {/* btn & comp text */}
          <div className='flex items-center max-w-sm
          lg:max-w-full mx-auto lg:max-0 gap-x-2 lg:gap-x-6'
          data-aos='fade-down'
          data-aos-delay='600'>
            <button className='btn btn-md 
              lg:btn-lg btn-accent flex justify-center 
              items-center lg:gap-x-4' 
              onClick={() => {
                window.open('https://wa.me/62895802377770?text=Hallo,%20Saya%20ingin%20memesan%20jasa', '_blank');}}
                >
            {/* <HiOutlineChevronDown /> */}
            <img className='w-[2rem] mr-[0.75rem] lg:mr-[0rem] xl:mr-[0rem]' src={wa} alt='' />
            {btnText}
            </button>
            <span className='text-light lg:lead lg:mb-0'>
              {compText}</span>
            </div>
          </div>
          {/* image */}
          <div className='flex-1'
          data-aos= 'fade-down'
          data-aos-delay= '800'>
            <img className='w-[45rem] pt-[4rem]' src={image} alt='' />
          </div> 
        </div>
      </div>
    </section>
  )
};

export default Hero;
