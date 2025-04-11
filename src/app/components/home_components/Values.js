'use client';

import React from 'react';
import Image from 'next/image';

const values = [
  {
    image: "/images/available.png",
    title: 'Accessible',
    description: 'Breaking barriers to provide care anytime, anywhere, for all individuals.'
  },
  {
    image: "/images/affordable.png",
    title: 'Affordable',
    description: 'Ensuring that mental health care is cost-effective and within reach for everyone.'
  },
  {
    image: "/images/authentic.png",
    title: 'Authentic',
    description: 'Connecting users with verified and trusted professionals to deliver genuine care and support.'
  },
  {
    image: "/images/approchable.png",
    title: 'Approachable',
    description: 'Creating a safe, welcoming, and non-judgmental environment for everyone seeking help.'
  }
];

const Values = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-[3%] md:px-[4%] lg:px-[5%] text-center">
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#023C3D] mb-8 sm:mb-12 md:mb-16 lg:mb-30">Why Choose Raaha?</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-20 lg:gap-40 max-w-10xl mx-auto">
        {values.map((value, index) => (
          <div key={index} className="text-center max-w-xs mx-auto mb-6 sm:mb-10 md:mb-20 lg:mb-35 p-3">
            <div className="relative w-12 sm:w-14 md:w-14 lg:w-16 h-12 sm:h-14 md:h-14 lg:h-16 mx-auto mb-3 md:mb-4">
              <Image 
                src={value.image} 
                alt={value.title} 
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-800 mb-2 md:mb-3">{value.title}</h3>
            <p className="text-sm sm:text-sm md:text-base lg:text-base text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;