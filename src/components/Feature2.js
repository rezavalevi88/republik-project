import React from 'react';
// import data
import {features} from'../data'

const Feature2 = () => {
  // destructure features
  const {feature2} = features
  // destrutre features2
  const {pretitle, title, subtitle, btnLink, btnIcon, 
  image} = feature2
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row
          lg:items-center lg:gap-x-[1.875rem]'>

          {/* image */}
          <div className=
          'flex-1 order-2 lg:order-1'
          data-aos='fade-right'
          // data-aos-delay='1400'
          data-aos-offset='250'
          data-aos-delay='250'>
            <img className='w-[31rem]' src={image} alt='' />
          </div>

          {/* text */}
          <div className='flex-1 order-1 lg:order-2' 
          data-aos='fade-left'
          // data-aos-delay='1200'
          data-aos-offset='250'
          data-aos-delay='250'>
            <div className='pretitle'>{pretitle}</div>
            <h2 className='title'>{title}</h2>
            <p className='lead'>{subtitle}</p>
            <a href='#pf2' className='btn-link flex items-center
            gap-x-3 hover:gap-x-5 transition-all pb-[1rem]'>
              {btnLink} <img src={btnIcon} alt='' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Feature2;
