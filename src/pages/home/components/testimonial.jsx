import React from 'react';
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    id: 1,
    name: 'Sophia Williams',
    image: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'I was really impressed with the variety of gadgets on this site. The new wireless headphones I ordered are top quality, with amazing sound clarity and battery life. The checkout process was seamless, and the customer service team was very responsive. Definitely coming back for more!'
  },
  {
    id: 2,
    name: 'Mark Huff',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'The 4K monitor I bought from this store is perfect for my work. The shipping was fast, and the product arrived in perfect condition. This is the best e-commerce site I’ve found for affordable yet high-performance electronics. Highly recommended!.'
  },
  {
    id: 3,
    name: 'Rodel Golez',
   
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'I purchased a new tablet for my studies, and I couldn’t be happier! The delivery was quick, and the tablet works like a charm. I had no trouble navigating the website, and I was able to find exactly what I needed within minutes. Will be recommending this store to my friends!'
  },
  {
    id: 4,
    name: 'Michael Johnson',
    
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'I recently bought a high-end drone from this website, and it’s everything I hoped for. The gadget selection is excellent, and the prices are very competitive. I had some questions about the product, and their customer support team was incredibly helpful in guiding me through the specs. Awesome experience!'
  },
  {
    id: 5,
    name: 'Olivia Martinez',
    
    image: 'https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'The latest laptop I got from here exceeded my expectations. It’s super fast, lightweight, and perfect for my design work. The entire purchase process, from browsing the site to receiving the delivery, was smooth and hassle-free. I’ll be returning for all my future tech needs!'
  }
  ,
  {
    id: 6,
    name: 'Chris Evans',
    
    image: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'I bought a gaming console from this site, and I’m blown away by the speed of the delivery and the quality of the product. The site is easy to navigate, and the reviews for each product really helped me make an informed decision. 10/10 experience!'
  }
];

const Testimonial = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Clients Say</h2>
        <p className="mt-4 text-lg text-gray-500">
        These reviews highlight different aspects of the e-commerce site, such as product quality, fast shipping, user-friendly interface, and responsive customer support.
        </p>
      </div>
      
      <div className="mt-10 flex  justify-center">
        
         <Marquee autoFill={true} direction="left" loop={0} delay={1} speed={45} className="flex">
         {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-80 h-80  p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center h-full">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 h-24 overflow-hidden">{testimonial.text}</p>
              <h3 className="mt-4 font-semibold text-lg text-gray-900">{testimonial.name}</h3>
              <p className="text-blue-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
  </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
