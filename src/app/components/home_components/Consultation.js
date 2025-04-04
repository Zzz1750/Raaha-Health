'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Abhaya_Libre, Joan, Inter } from 'next/font/google';

const abhayaLibre = Abhaya_Libre({
  subsets: ['latin'],
  weight: ['800'], 
});
const joan = Joan({
  subsets: ['latin'],
  weight: ['400'],
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['600'],
});

const Consultation = () => {
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

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-[3%] md:px-[4%] lg:px-[5%] relative top-[20px] sm:top-[30px] md:top-[40px] lg:top-[50px] bg-white">
      <div className="bg-white rounded-[20px] p-5 sm:p-8 md:p-10 lg:p-12 text-left relative max-w-[1000px] mx-auto">
        <h2 className={`${abhayaLibre.className} text-2xl sm:text-3xl md:text-4xl lg:text-[58px] text-[#023C3D] mb-3 sm:mb-4 md:mb-5 lg:mb-6 
                     text-center sm:text-center md:text-left lg:text-left
                     ${windowWidth >= 768 ? 'relative right-[100px] md:right-[200px] lg:right-[300px]' : ''}
                     transform transition-all duration-300 max-w-full`}>
          Not Sure Who to Consult?
        </h2>
        <p className={`${joan.className} text-base sm:text-lg md:text-xl lg:text-[27px] text-gray-700 mb-4 sm:mb-5 md:mb-6 lg:mb-8 
                     text-center sm:text-center md:text-left lg:text-left
                     ${windowWidth >= 768 ? 'relative right-[100px] md:right-[200px] lg:right-[300px]' : ''}
                     transform transition-all duration-300 max-w-full md:max-w-[1000px]`}>
          Finding the right mental health expert can be tough and confusing. Answer a few quick questions, and we'll guide you to the best professional support tailored to your unique needs.
        </p>
        <div className="flex justify-center relative top-[30px] sm:top-[50px] md:top-[100px] lg:top-[150px] mt-6 sm:mt-7 md:mt-8 lg:mt-10 mb-10 sm:mb-12 md:mb-16 lg:mb-26">
          <button className={`${inter.className} w-[180px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[50px] sm:h-[55px] md:h-[65px] lg:h-[80px] text-[16px] sm:text-[17px] md:text-[20px] lg:text-[24px] font-semibold border border-[#2EBE5E] text-[#2EBE5E] rounded-[5px] bg-white transition-colors hover:bg-[#2EBE5E] hover:text-white`}>
            Take Survey
          </button>
        </div>

        <div className={`absolute ${windowWidth >= 768 ? 'block' : 'hidden'} 
                      right-4 sm:right-16 md:right-0 lg:left-[1000px] 
                      bottom-[100px] sm:bottom-[150px] md:bottom-[200px] lg:bottom-[270px] 
                      h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] 
                      w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] 
                      opacity-80`}>
          <Image
            src="/images/tree-green.png"
            alt="Tree Icon"
            fill
          />
        </div>

        <div className={`h-[100px] sm:h-[120px] md:h-[150px] lg:h-[150px] 
                      w-[100px] sm:w-[120px] md:w-[150px] lg:w-[150px] 
                      opacity-80 mx-auto mt-8 
                      ${windowWidth < 768 ? 'block' : 'hidden'} relative`}>
          <Image
            src="/images/tree-green.png"
            alt="Tree Icon"
            fill
            className="opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Consultation;