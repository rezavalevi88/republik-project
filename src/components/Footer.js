import React from 'react';
// import data
import { footer } from '../data';
// import components
import Copyright from './Copyright';

const Footer = () => {
  // destructure footer
  const {logo, legal, newsletter, form} = footer
  return (
    <footer 
    className='pt-[8.875rem] pb-[3.75rem]'>
      <div className='container mx-auto'>
        <div className='flex flex-col 
      items-center text-center lg:flex-row lg:items-start lg:text-left 
      lg:justify-between gap-y-8'>
      {/* logo */}
        <div 
        data-aos='fade-up'
        // data-aos-offset='900'
        data-aos-delay='500'>
          <img id='located' className='w-[9.25rem]' src={logo} alt='' />
          <p className='mt-[2rem] max-w-[25rem]'>
            Jl. Kapuk Kebon Jahe Rt. 006 Rw. 003, No.025<br></br>
            Cengkareng - Jakarta Barat<br></br>
            Phone: (0895) 8023 7777 0<br></br>
            Email: rezavalevi89@gmail.com
          </p>
        </div>
        {/* list 1 */}
        {/* <div 
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='500'>
          <div 
          className='text-2xl uppercase font-medium mb-6'>
            links</div>
          <ul 
          className='flex flex-col gap-y-3'>
            {links.map ((item, index) => {
              // destructure item
              const {href, name} = item
              return (
                <li key={index}>
                  <a 
                  className='font-medium 
                  hover:text-accent transition' 
                  href={href}>{name}</a>
                </li>
              )
            })}
          </ul>
        </div> */}
        {/* list 2 */}
        <div 
        data-aos='fade-up'
        // data-aos-offset='900'
        data-aos-delay='700'>
          <div 
          className='text-2xl uppercase font-medium mb-6'>
            Legal</div>
          <ul 
          className='flex flex-col gap-y-3 cursor-no-drop'>
            {legal.map ((item, index) => {
              // destructure item
              const {href, name} = item
              return (
                <li key={index}>
                  <a 
                  className='font-medium 
                  hover:text-accent transition' 
                  href={href}>{name}</a>
                </li>
              )
            })}
          </ul>
        </div>
        {/* newsletter */}
        <div 
        data-aos='fade-up'
        // data-aos-offset='900'
        data-aos-delay='900'>
          <div 
          className='text-2xl uppercase font-medium mb-6'>
            {newsletter.title}</div>
          <div 
          className='text-xl text-light mb-[1.125rem]'>
            {newsletter.subtitle}</div>
          {/* form */}
          <form className='max-w-[21.813rem] mb-[0.625rem]'>
            <div className='h-[3.875rem] p-[0.438rem] flex border 
            border-dark rounded-lg'>
              <input 
              className='w-full h-full pl-6 border-none 
              outline-none placeholder:text-dark' 
              type='text' 
              placeholder={form.placeholder}/>
              <div 
              className='btn btn-sm bg-accent 
              hover:bg-accentHover w-[6.375rem] text-white cursor-no-drop'>{form.btnText}</div>
            </div>
          </form>
          <span className='text-sm text-light'>{form.smallText}</span>
        </div>
        </div>
        <hr 
        className='mt-10 mb-5'
        data-aos='fade-up'
        // data-aos-offset='900'
        data-aos-delay='1100'
        />
        <Copyright />
      </div>
    </footer>
  )
};

export default Footer;
