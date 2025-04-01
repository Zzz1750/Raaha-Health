'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const issues = [
  {
    title: 'Stress',
    image: '/images/stress.png',
    className: 'col-span-1',
    dimensions: 'w-[505px] h-[220px] max-w-full',
    overlay: 'bg-[#C53F3F]'
  },
  {
    title: 'Lack Of Sleep',
    image: '/images/sleep.png',
    className: 'row-span-2',
    dimensions: 'w-[362px] h-[450px] max-w-full',
    overlay: 'bg-[#C4A94A]'
  },
  {
    title: 'Anxiety',
    image: '/images/anxiety.png',
    className: 'col-span-1',
    dimensions: 'w-[505px] h-[220px] max-w-full',
    overlay: 'bg-[#9F4200]'
  },
  {
    title: 'Loneliness',
    image: '/images/loneliness.png',
    className: 'col-span-1',
    dimensions: 'w-[505px] h-[220px] max-w-full',
    overlay: 'bg-[#82CBC9]'
  },
  {
    title: 'Burnout',
    image: '/images/burnout.png',
    className: 'row-span-1',
    dimensions: 'w-[362px] h-[220px] max-w-full',
    overlay: 'bg-[#F06F83]'
  }
];

const CommonIssues = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 px-[5%] text-center">
      <h2 className="text-5xl text-[#023C3D] mb-24 font-bold">Most People Face</h2>
      <div className="grid grid-cols-1 md:grid-cols-[505px_362px] gap-4 max-w-4xl mx-auto">
        {issues.map((issue, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${issue.className} ${issue.dimensions}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={issue.image}
              alt={issue.title}
              layout="fill"
              objectFit="cover"
              className={`
                transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                ${hoveredIndex === index ? 'scale-110' : 'scale-100'}
              `}
            />
            <div
              className={`
                absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                flex items-center justify-center
                ${hoveredIndex === index ? `${issue.overlay}` : ''}
              `}
            >
              <span
                className={`
                  text-white text-3xl font-semibold
                  transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                  ${hoveredIndex === index ? 'scale-[1.4] -translate-y-2' : 'scale-100'}
                `}
              >
                {issue.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommonIssues;