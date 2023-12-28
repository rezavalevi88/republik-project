import React from 'react';
// import data
import { cta } from '../data';
// import icons
import {HiOutlineChevronDown} from 'react-icons/hi'

const Cta = () => {
  // destructure CTA data
  const {title, subtitle, btnText, img1, img2} = cta;
  return (
    <section className='section bg-cta bg-cover bg-left-top mt-[8rem]' 
    data-aos='fade-up'
    data-aos-offset='700'>
      <div className='max-w-[83.75rem] mx-auto px-[1.563rem]'>
        {/* text */}
        <div className='max-w-[57.5rem] mx-auto text-center'>
          <h2 
          className='h2 text-white mb-6'
          data-aos='fade-up'
          data-aos-delay='900'>
            {title}</h2>
          <p 
          className='text-2xl lg:text-4xl text-white'
          data-aos='fade-up'
          data-aos-delay='900'>
            {subtitle}
          </p>
        </div>
        {/* btn & images */}
        <div className='flex justify-between'>
          <img 
          className='hidden xl:flex max-w-[32rem]' src={img1} alt=''
          data-aos='zoom-out-right'
          data-aos-delay='900' />
          <button 
          className='btn btn-md btn-white mt-[2.5rem] 
          lg:text-[1.375rem] gap-x-[0.625rem] mx-auto' 
          data-aos='fade-up'
          data-aos-delay='900'
          onClick={() => {
            window.open('https://wa.me/62895802377770?text=Hallo,%20bisa%20info%20jasa%20Foto/Video', 
            '_blank');}}
            >
            {btnText} <HiOutlineChevronDown />
          </button>
          <img className='hidden xl:flex max-w-[32rem]' src={img2} alt='' 
          data-aos='zoom-out-left'
          data-aos-delay='900' />
        </div>
      </div>
    </section>
  )
};

export default Cta;
