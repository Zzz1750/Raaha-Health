'use client';

import React from 'react';
import Image from 'next/image';


const services = [
  {
    title: 'Psychiatrist',
    image: "/images/doctor real 1.png",
    description: 'A medical doctor who diagnoses mental illness and can prescribe medication'
  },
  {
    title: 'Counselor',
    image: "/images/counselor real 1.png",
    description: 'A professional who offers guidance and support for personal and emotional challenges'
  },
  {
    title: 'Psychologist',
    image: "/images/therapist real 1.png",
    description: 'A specialist in mental health who provides therapy but cannot prescribe medication'
  }
];

const Services = () => {
  return (
    <section className="py-20 px-5 bg-white relative -bottom-24">
      <h2 className="text-center text-3xl text-primary mb-20">What We Offer</h2>
      <div className="flex justify-center gap-40 max-w-8xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg transition-transform hover:-translate-y-1 w-[35%]">
            <div className="relative w-full h-96 mb-6">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl text-primary mb-4">{service.title}</h3>
            <p className="text-lg text-gray-700 mb-6">{service.description}</p>
            <button className="border border-green-600 text-green-600 px-6 py-2 rounded transition-colors hover:bg-green-600 hover:text-white">Explore</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;