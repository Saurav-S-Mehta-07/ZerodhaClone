import React from 'react'
import Hero from './Hero';
import Award from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import NewsName from './NewsName';

function HomePage() {
    return ( 
        <>
          <Hero/>
          <Award/>
          <Stats/>
           <NewsName/>
          <Pricing/>
          <Education/>
          <OpenAccount/>
        </>
     );
}

export default HomePage;