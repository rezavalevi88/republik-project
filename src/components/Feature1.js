import React from 'react';
// import data
import {features} from'../data'

const Feature1 = () => {
  // destructure features
  const {feature1} = features
  // destrutre features1
  const {pretitle, title, subtitle, btnLink, btnIcon, 
  image} = feature1
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row
          lg:items-center lg:gap-x-[1.875rem]'>
          {/* text */}
          <div className='flex-1' data-aos='fade-right'
          // data-aos-delay='1200'
          data-aos-offset='250'
          data-aos-delay='250'>
            <div className='pretitle'>{pretitle}</div>
            <h2 className='title'>{title}</h2>
            <p className='lead'>{subtitle}</p>
            <a href='#portfolio' className='btn-link flex items-center
            gap-x-3 hover:gap-x-5 transition-all pb-[1rem]'
            >
              {btnLink} <img src={btnIcon} alt='' />
            </a>
          </div>
          {/* image */}
          <div className='flex-1' data-aos='fade-left'
          // data-aos-delay='1400'
          data-aos-offset='250'
          data-aos-delay='250'>
            <img className='w-[32rem]' src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Feature1;
