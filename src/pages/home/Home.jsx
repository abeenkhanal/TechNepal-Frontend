import React from 'react'
import Hero from './components/Hero'
// import Homecards from './components/Homecards';
import Productshow from './components/Productshow'
import Section from './components/Section';
import Category from './components/Category';
import Testimonial from './components/testimonial';




const Home = () => {
  return (
    <div>
        <Hero />

        {/* <Homecards /> */}

        <Productshow />
        
        <Section />

        <Category />

        <Testimonial/>

        
       
          
    </div>
  )
}

export default Home