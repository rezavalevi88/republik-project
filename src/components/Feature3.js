import React from 'react';
// import data
import {features} from'../data'

const Feature3 = () => {
  // destructure features
  const {feature3} = features
  // destrutre features1
  const {pretitle, title, subtitle, btnLink, btnIcon, 
  image} = feature3
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row
          lg:items-center lg:gap-x-[1.875rem] m:mb-[2rem]'>
          {/* text */}
          <div className='flex-1' data-aos='fade-right'
            data-aos-offset='250'
            data-aos-delay='250'>
            <div className='pretitle'>{pretitle}</div>
            <h2 className='title'>{title}</h2>
            <p className='lead'>{subtitle}</p>
            <a href='#pf3' className='btn-link flex items-center
            gap-x-3 hover:gap-x-5 transition-all pb-[1rem]'>
              {btnLink} <img src={btnIcon} alt='' />
            </a>
          </div>
          {/* image */}
          <div className='flex-1' data-aos='fade-left'
          data-aos-offset='250'
          data-aos-delay='250'>
            <img className='w-[30rem]' src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Feature3;
