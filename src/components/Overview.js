import React from 'react';
// import data
import bg from '../img/overview/bg1.png'
import cta from '../img/overview/cta2.png'

const Overview = () => {
  return (
    <div className='py-[4rem]'>
        <img className='max-h-[44rem] flex absolute justify-center items-center mx-auto w-full' 
        data-aos='fade-up'
        data-aos-delay='300'
        src={bg} alt='' />

        <img id='kami' className='flex relative justify-center items-center mx-auto w-50% pt-[4.85rem]' 
        data-aos='fade-up'
        data-aos-delay='600'
        src={cta} alt='' />
        
        <div className='lead flex justify-center items-center text-center'
        data-aos='fade-up'
        data-aos-delay='900'>
        <p className='max-w-[72.5rem] px-[2rem] py-[2rem] font-semibold italic'>
          " Kami adalah tim kreatif yang tidak hanya bekerja bersama, 
          tetapi juga bercita-cita bersama. Kami adalah cermin 
          dari visi yang kami buat, dan setiap langkah adalah 
          bagian dari kreativitas. Mari bersama-sama menghadirkan sisi 
          keindahan, inovasi, dan inspirasi melalui setiap jejak langkah 
          kreatif kami?."</p>
        </div>
  </div>
  )
};

export default Overview;
