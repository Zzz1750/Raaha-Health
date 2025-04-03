'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-[950px] flex items-center bg-cover bg-center">
      <div className="max-w-3xl px-16">
        <h1 className="text-6xl font-bold leading-tight mb-6 text-black">
          START YOUR JOURNEY TOWARDS A BETTER YOU
        </h1>
        <p className="text-xl opacity-90 mb-8 max-w-2xl pt-12 font-medium text-black">
          Experience care and guidance from a network of experts, helping you uncover a path to enduring wellness.
        </p>
      </div>
      <button className="absolute right-48 bottom-64 border border-white text-white px-8 py-3 rounded hover:bg-white/10 transition-colors">
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