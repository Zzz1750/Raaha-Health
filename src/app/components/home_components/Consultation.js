'use client';

import React from 'react';
import Image from 'next/image';

const Consultation = () => {
  return (
    <section className="py-20 px-[5%] relative top-[50px] bg-white">
      <div className="bg-white rounded-[20px] p-12 text-left relative max-w-[1000px] mx-auto">
        <h2 className="text-4xl md:text-[58px] text-[#023C3D] mb-6 
                     relative md:right-[300px] transform transition-all duration-300
                     max-w-full">
          Not Sure Who to Consult?
        </h2>
        <p className="text-xl md:text-[27px] text-gray-700 mb-8 
                     relative md:right-[300px] transform transition-all duration-300
                     max-w-full md:max-w-[1000px]">
          Finding the right mental health expert can be tough and confusing. Answer a few quick questions, and we'll guide you to the best professional support tailored to your unique needs.
        </p>
        <div className="flex justify-center relative top-[150px] mt-10 mb-40">
          <button className="w-[300px] h-[80px] text-[24px] font-semibold border border-[#2EBE5E] text-[#2EBE5E] rounded-[5px] bg-white transition-colors hover:bg-[#2EBE5E] hover:text-white">
            Take Survey
          </button>
        </div>

        {/* Desktop Tree Icon */}
        <div className="absolute left-[1000px] bottom-[270px] h-[300px] w-[300px] opacity-80 
                        md:block hidden">
          <Image
            src="/images/tree-green.png"
            alt="Tree Icon"
            fill
            className="opacity-80"
          />
        </div>

        {/* Mobile Tree Icon */}
        <div className="h-[150px] w-[150px] opacity-80 mx-auto mt-8 
                        md:hidden block relative">
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