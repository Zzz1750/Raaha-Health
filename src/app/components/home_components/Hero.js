'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] sm:min-h-[750px] md:min-h-[850px] lg:min-h-[950px] flex items-center bg-cover bg-center">
      <div className="max-w-3xl px-4 sm:px-8 md:px-12 lg:px-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-black">
          START YOUR JOURNEY TOWARDS A BETTER YOU
        </h1>
        <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl pt-3 sm:pt-6 md:pt-8 lg:pt-12 font-medium text-black">
          Experience care and guidance from a network of experts, helping you uncover a path to enduring wellness.
        </p>
      </div>
      <button className="absolute right-4 sm:right-12 md:right-24 lg:right-48 bottom-12 sm:bottom-24 md:bottom-36 lg:bottom-64 border border-white text-white px-3 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2 md:py-3 rounded hover:bg-white/10 transition-colors">
        Learn more
      </button>
      
      {/* Background Image */}
      <Image
        src="/images/green-bg-1.png"
        alt="Background"
        fill
        quality={100}
        priority
        className="absolute inset-0 z-[-1] object-cover"
      />
    </section>
  );
};

export default Hero;