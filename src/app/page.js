'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Hero from './components/home_components/Hero';
import Services from './components/home_components/Services';
import HowItWorks from './components/home_components/HowItWorks';
import Values from './components/home_components/Values';
import CommonIssues from './components/home_components/CommonIssues';
import Consultation from './components/home_components/Consultation';
import FAQ from './components/home_components/FAQ';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const threshold = 200; 
      
      if (currentScrollPos > threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <div className="relative">
          <div
            className={`
              absolute left-1/2 -translate-x-1/2 -top-12 
              bg-white rounded-full p-2 shadow-lg z-10
              transition-all duration-500 ease-in-out
              ${isVisible 
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform -translate-y-full'
              }
            `}
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src="/images/consultation_bg.png"
                alt="Icon"
                width={80}
                height={80}
                className="object-cover rounded-full mt-4 ml-2"
              />
            </div>
          </div>
          <Consultation />
          <Services />
          <HowItWorks />
          <Values />
          <CommonIssues />
          <FAQ />
        </div>
      </main>
    </div>
  );
}