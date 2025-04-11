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
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
  
    if (typeof window !== 'undefined') {

      setIsMobile(window.innerWidth < 768);
      
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const threshold = isMobile ? 100 : 200;
        
        if (currentScrollPos > threshold) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isMobile]);
  
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <div className="relative">
          <div
            className={`
              absolute left-1/2 -translate-x-1/2 ${isMobile ? '-top-10' : '-top-16'}
              bg-white rounded-full p-3 md:p-4 z-10
              transition-all duration-500 ease-in-out
              ${isVisible 
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform -translate-y-full'
              }
            `}
          >
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-md relative flex items-center justify-center overflow-visible">
              <Image
                src="/images/consultation_bg.png"
                alt="Icon"
                width={isMobile ? 60 : 80}
                height={isMobile ? 60 : 80}
                className="w-14 h-14 md:w-17 md:h-17 object-cover rounded-full absolute ml-1 mt-2"
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