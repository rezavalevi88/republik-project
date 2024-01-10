import React from 'react';
// import data
import {overview} from '../data';
import bg from '../img/overview/bg1.png'
import cta from '../img/overview/cta2.png'

const Overview = () => {
  const { title }
  = overview;
  return (
    <div className='py-[4rem]'>
        <img className='max-h-[44rem] flex absolute justify-center 
        items-center mx-auto w-full' 
        data-aos='fade-up'
        data-aos-delay='300'
        data-aos-offset='50'
        src={bg} alt='' />

        <img id='kami' className='flex relative justify-center items-center 
        mx-auto w-85% pt-[6.5rem] bottom-[0rem]' 
        data-aos='fade-up'
        data-aos-delay='600'
        src={cta} alt='' />
        
        <div className='lead flex justify-center items-center text-center'
        data-aos='fade-up'
        data-aos-delay='900'>
        <p className='max-w-[72.5rem] px-[2rem] pt-[2rem] font-semibold italic'>
          {title}</p>
        </div>
  </div>
  )
};

export default Overview;
