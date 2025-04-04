'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const issues = [
  {
    title: 'Stress',
    image: '/images/stress.png',
    className: 'col-span-1',
    overlay: 'bg-[#C53F3F]'
  },
  {
    title: 'Lack Of Sleep',
    image: '/images/sleep.png',
    className: 'row-span-1 sm:row-span-1 md:row-span-2',
    overlay: 'bg-[#C4A94A]'
  },
  {
    title: 'Anxiety',
    image: '/images/anxiety.png',
    className: 'col-span-1',
    overlay: 'bg-[#9F4200]'
  },
  {
    title: 'Loneliness',
    image: '/images/loneliness.png',
    className: 'col-span-1',
    overlay: 'bg-[#82CBC9]'
  },
  {
    title: 'Burnout',
    image: '/images/burnout.png',
    className: 'row-span-1',
    overlay: 'bg-[#F06F83]'
  }
];

const CommonIssues = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [touchedIndex, setTouchedIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
   
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
  
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const handleTouchStart = (index) => {
    setTouchedIndex(index);
  };

  const handleTouchEnd = () => {
    setTouchedIndex(null);
  };

  const getElementHeight = (index) => {
    if (index === 1) { 
      if (windowWidth >= 768) {
        return '450px';
      } else if (windowWidth >= 640) {
        return '250px';
      } else {
        return '180px';
      }
    } else {
      if (windowWidth >= 768) {
        return '220px';
      } else if (windowWidth >= 640) {
        return '200px';
      } else {
        return '180px';
      }
    }
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-[3%] md:px-[4%] lg:px-[5%] text-center">
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-[#023C3D] mb-8 sm:mb-10 md:mb-12 lg:mb-20 font-bold mt-0 sm:mt-0 md:mt-0 lg:-mt-20">Most People Face</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[505px_362px] gap-4 max-w-4xl mx-auto">
        {issues.map((issue, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${issue.className}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() => handleTouchStart(index)}
            onTouchEnd={handleTouchEnd}
            style={{ height: getElementHeight(index) }}
          >
            <div className="relative w-full h-full">
              <Image
                src={issue.image}
                alt={issue.title}
                fill
                objectFit="cover"
                className={`
                  transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                  ${(hoveredIndex === index || touchedIndex === index) ? 'scale-110' : 'scale-100'}
                `}
              />
              <div
                className={`
                  absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                  flex items-center justify-center
                  ${(hoveredIndex === index || touchedIndex === index) ? `${issue.overlay}` : ''}
                `}
              >
                <span
                  className={`
                    text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold
                    transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                    ${(hoveredIndex === index || touchedIndex === index) ? 'scale-[1.2] sm:scale-[1.3] md:scale-[1.3] lg:scale-[1.4] -translate-y-2' : 'scale-100'}
                  `}
                >
                  {issue.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommonIssues;