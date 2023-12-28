import React from 'react';
// import data
import { testimonials3 } from '../data';
// import components
import ClientSlider3 from './ClientSlider3';

const Testimonials3 = () => {
  // destructure testimonial
  const {title, clients} = testimonials3;
  return (
  <section id='pf3' className='section p-0'>
    <div className='container mx-auto'>
      {/* title */}
        <h2 className='title mb-10 lg:mb-20 text-center 
        max-w-[57.5rem] mx-auto'
        data-aos='fade-up'
        data-aos-offset='900'
        >{title}
        </h2>
        {/* slider */}
        <div data-aos='fade-up' data-aos-offset='900'>
          <ClientSlider3 clients={clients} />
        </div>
    </div>
  </section>

  )
  };
export default Testimonials3;
