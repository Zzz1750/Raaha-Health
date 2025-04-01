import React from 'react';
import Image from 'next/image';
import { Poppins} from "next/font/google";
const poppins = Poppins({ weight: ['100'], subsets: ["latin"] });


const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center bg-[#B8DEE2] p-4 md:p-8 h-[250px] md:h-[300px] fixed top-0 left-0 right-0">
      <div className="flex flex-col md:flex-row items-center justify-center container mx-auto">
        <div className="relative h-[140px] w-[120px] md:h-[255px] md:w-[215px] overflow-hidden rounded-lg bg-[#B8DEE2]">
          <Image 
            src="/images/doctor.png" 
            alt="Dr. Seethalakshmi" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="mt-3 md:mt-0 md:ml-12 text-center md:text-left">
          <h1 className={` ${poppins.className}"text-2xl md:text-[34px] text-black font-medium `}>Dr.Seethalakshmi</h1>
          <p className="text-[14px] md:text-[18px] text-gray-600 mt-1">Counseling psychologist</p>
          <p className="text-[12px] md:text-[16px] text-gray-500 mt-1 md:mt-2">3+ yrs experience</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;