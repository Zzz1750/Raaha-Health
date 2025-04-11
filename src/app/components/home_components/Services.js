'use client';

import React from 'react';
import Image from 'next/image';
import { Abhaya_Libre, Joan } from 'next/font/google';

const abhayaLibre = Abhaya_Libre({
  subsets: ['latin'],
  weight: ['800'],
});
const joan = Joan({
  subsets: ['latin'],
  weight: ['400'],
});

const services = [
  {
    title: 'Psychiatrist',
    image: "/images/doctor real 1.png",
    description: 'A medical doctor who diagnoses mental illnesses and can prescribe medication.',
    buttonText: 'Explore'
  },
  {
    title: 'Counselor',
    image: "/images/counselor real 1.png",
    description: 'A professional who offers guidance and support for personal and emotional challenges.',
    buttonText: 'Explore'
  },
  {
    title: 'Psychologist',
    image: "/images/therapist real 1.png",
    description: 'A specialist in mental health who provides therapy but typically doesn\'t prescribe medication.',
    buttonText: 'Explore'
  }
];

const Services = () => {
  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 px-4 bg-white">
      <h2 className={`${abhayaLibre.className} text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#023C3D] mb-8 sm:mb-12 md:mb-16 lg:mb-26`}>What We Offer</h2>
      
      <div className="flex flex-col sm:flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-24 max-w-auto mx-auto px-2 md:px-4 mb-12 md:mb-16 lg:mb-24">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg p-4 sm:p-5 md:p-6 text-center border border-gray-200 shadow-md flex-1 max-w-sm mx-auto h-auto md:h-[500px] lg:h-[600px] flex flex-col justify-between mb-8 md:mb-0">
            <div className="relative w-full aspect-square mb-4 md:mb-6 max-w-xs h-[180px] sm:h-[200px] md:h-[280px] lg:h-[350px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-grow justify-between">
              <div>
                <h3 className={`${joan.className} text-xl sm:text-xl md:text-2xl font-semibold text-[#023C3D] mb-3 md:mb-4 lg:mb-6`}>{service.title}</h3>
                <p className={`${joan.className} text-sm text-gray-700 mb-3`}>{service.description}</p>
              </div>
              <button className="bg-[#023C3D] text-white py-1 px-4 text-base md:text-lg font-bold rounded hover:bg-[#1e4e50] transition-colors w-20 md:w-22 lg:w-24 mx-auto mt-4 md:mt-2">
                {service.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;