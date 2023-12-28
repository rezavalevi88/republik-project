import React from 'react';

// import aos
import 'aos/dist/aos.css'
// import aos css

// import components
import Testimonials from './components/Testimonials';
import Testimonials2 from './components/Testimonials2';
import Testimonials3 from './components/Testimonials3';
import Hero from './components/Hero';
import Aos from 'aos';
import Header from './components/Header';
import Overview from './components/Overview';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App = () => {
  // initialize aos
  Aos.init({
  duration: 1200,
  offset: 50,
  });
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      {/* <p>Tes aja</p> */}
      <Overview />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Pricing />
      <Testimonials />
      <Testimonials2 />
      <Testimonials3 />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
