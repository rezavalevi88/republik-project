import React, {useState} from 'react';
// import data\
import { pricing } from '../data';
// import icons
import { HiCheck,HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Pricing = () => {
  // index state
  const [index, setIndex] = useState(1);
  // destructure pricing
  const {title, cards} = pricing;
  return (
    <section id='priced' className='section'>
      <div className='container mx-auto'>
        {/* title */}
        <h2 className='h2 mb-10 lg:mb-20 text-center'
        data-aos='fade-up'
        data-aos-delay='700'
        >{title}</h2>
        {/* cards */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[1.875rem]
        gap-y-[1.875rem] lg:gap-y-0 justify-center items-center'>
          {cards.map (( card, cardIndex) => {
            // destructure card
            const {icon, title, services, price, 
            userAmount, btnText, delay} =
              card;
              // card
              return (
                <div 
                data-aos='fade-up'
                data-aos-delay={delay}
                data-aos-offset='800'
                key={cardIndex}>
                  <div
                    onClick={() => setIndex(cardIndex)}
                    className={`${
                      cardIndex === index
                        ? 'bg-white shadow-2xl'
                        : 'border border-gray'
                     } w-[21.875rem] h-[31.25rem] rouded-[0.75rem] 
                    p-[2.5rem] cursor-pointer transition-all`}
                  >
                    {/* card icon */}
                    <div className='mb-8'>
                      <img src={icon} alt=''/>
                    </div>
                    {/* card title */}
                    <div className='text-[2rem] font-semibold 
                    mb-8'>{title}</div>
                    {/* card services */}
                    <div className='flex flex-col gap-y-2 
                    mb-6'>
                      {services.map((service, index) => {
                        // destructure service
                        const {name} = service;
                        return (
                          <div className='flex items-center
                        gap-x-[0.625rem]' key={index}>
                            <HiCheck className='text-light' />
                            <div>{name}</div>
                          </div>
                        )
                      })}
                    </div>
                      <div>
                        <div className='mb-10'>
                          <div>
                            <span className='text-2xl font-semibold'>
                              {price}
                              </span>
                            <span className='text-xl text-light 
                            font-light ml-2'>
                              / Bulan
                            </span>
                          </div>
                          <div className='text-base text-light mb-10'>
                      {userAmount}
                    </div>
                    {/* btn */}
                    <button className={`${cardIndex === index 
                    ? 'bg-accent hover:bg-accentHover text-white'
                    : 'border-[0.15rem] border-accent text-accent'
                  } btn btn-sm scroll-px-[0.875rem]`}
                  onClick={() => {
                    window.open('https://wa.me/62895802377770?text=Hallo,%20mau%20pesan%20paket%20desain', 
                    '_blank');}}
                    >
                      <span>{btnText}</span>
                      <HiOutlineArrowNarrowRight className='ml-2'/>
                    </button>
                        </div>
                      </div>
                    
                  </div>
                </div>
              )
          })}
        </div>
      </div>
    </section>
  )
};

export default Pricing;
