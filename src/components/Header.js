import React, {useState, useEffect} from 'react';

// import data
import {header} from '../data';

// import icons
import {HiMenuAlt4, HiOutlineX} from 'react-icons/hi';

// import components
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';
// import Client1 from './ClientSlider';
// import Hero from '../components/Hero';

const Header = () => {
  // mobile nav state
  const [mobileNav, setMobileNAv] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // destructure header
  const { logo, btnText } = header;
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive
      (false);
    });
  });
  return (
  <header className={`${
    isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[1rem]'
    } py-3 lg:pt-3 fixed w-full transition-all z-10`}
    >
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <a href='#hero' data-aos='fade-down' data-aos-delay='1000'>
          <img className='w-[9rem]' src={logo} alt='' />
        </a>
        {/* nav - initially hidden - show on desktop mode*/}
        <div className='hidden lg:flex'
        data-aos='fade-down' data-aos-delay='1200'>
          <Nav />
        </div>
        {/* cta button - initially hidden - show on desktop mode*/}
        <button className='btn btn-sm btn-outline hidden lg:flex'
        data-aos='fade-down' data-aos-delay='1400'
        onClick={() => {
          window.open('https://wa.me/62895802377770?text=Hallo,%20Saya%20ingin%20memesan%20jasa', '_blank');}}
          >
          {btnText}
          </button>
          {/* mobile nav trigger btn - hidden on desktop */}
          <button className='lg:hidden' onClick={() => 
          setMobileNAv(!mobileNav)}>
            {mobileNav ? (
              <HiOutlineX className='text-3xl text-accent' />
              ) : (
                <HiMenuAlt4 className='text-3xl text-accent' />
                )}
          </button>
          {/* mobile nav - hidden on desktop */}
          <div 
          className={`${
            mobileNav ? 'left-0' : '-left-full'
          } fixed top-0 bottom-0 w-[60vw] lg:hidden
          transition-all`}>
            <MobileNav />
          </div>
      </div>
    </header>
  );
};
export default Header;
