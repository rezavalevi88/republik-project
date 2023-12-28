import React from 'react';
// import data
import { testimonials2 } from '../data';
// import components
import ClientSlider2 from './ClientSlider2';

const Testimonials2 = () => {
  // destructure testimonial
  const {clients} = testimonials2;
  return (
  <section id='pf2' className='section p-0'>
    <div className='container mx-auto'>
      {/* title */}
        <h2 className='title mb-10 lg:mb-20 text-center 
        max-w-[57.5rem] mx-auto'
        data-aos='fade-up'
        data-aos-offset='900'
        >
        </h2>
        {/* slider */}
        <div data-aos='fade-up' data-aos-offset='900'>
          <ClientSlider2 clients={clients} />
        </div>
    </div>
  </section>

  )
  };
export default Testimonials2;
