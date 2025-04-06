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
    <section className="py-20 px-[5%] text-center">
      <h2 className="text-5xl font-bold text-[#023C3D] mb-36">Why Choose Raaha?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-40 max-w-10xl mx-auto">
        {values.map((value, index) => (
          <div key={index} className="text-center max-w-xs mx-auto mb-35 p-3">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <Image 
                src={value.image} 
                alt={value.title} 
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;