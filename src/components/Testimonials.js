import React from 'react';
// import data
import { testimonials } from '../data';
// import components
import ClientSlider from '../components/ClientSlider'

const Testimonials = () => {
  // destructure testimonial
  const {title, clients} = testimonials;
  return (
  <section id='portfolio' className='section p-0 top-0 mt-[6rem]'>
    <div className='container mx-auto'>
      {/* title */}
        <h2 className=' title mb-10 lg:mb-20 text-center 
        max-w-[57.5rem] mx-auto'
        data-aos='fade-up'
        data-aos-offset='900'
        >{title}
        </h2>
        {/* slider */}
        <div data-aos='fade-up' data-aos-offset='900'>
          <ClientSlider clients={clients} />
        </div>
    </div>
  </section>

  )
  };
export default Testimonials;
