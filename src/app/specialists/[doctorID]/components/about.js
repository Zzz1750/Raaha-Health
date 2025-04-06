import React from "react";
import Image from "next/image";
import { Poppins} from "next/font/google";
const poppins = Poppins({ weight: ['100'], subsets: ["latin"] });


const AboutComponent = (doctorDetails) => {
  const DrDetails = doctorDetails.doctorDetails
  console.log(DrDetails)
 
  return (
    <div className="w-full px-4 md:px-4 py-4 md:py-8 text-left md:ml-10">
      {/* About Section */}
      <h2 className="text-[20px] md:text-2xl font-bold text-[#023C3D] mb-4 -mt-8 md:mt-16">About Dr Seethalakshmi</h2>
      <p className="text-sm md:text-base text-black font-medium  mb-6 md:mb-8">
       {DrDetails?.about}
      </p> 

      {/* Languages Section */}
      <h3 className="text-lg md:text-xl font-bold text-[#023C3D] mb-4 md:mb-8">Languages</h3>
      <div className="flex flex-wrap gap-2 md:space-x-3 mb-6 md:mb-8">
      {DrDetails?.language?.map((item) => (
        <span key={item} className="px-3 py-1 border border-yellow-500 text-black rounded-full text-xs md:text-sm">{item}</span>))}
      </div>
      
      {/* Expertise Section */}
      <h3 className="text-lg md:text-xl font-bold text-[#023C3D] mb-4 md:mb-8 mt-4">Expertise</h3>
      <div className="flex flex-wrap gap-2 md:space-x-3 mb-6 md:mb-8">
        {DrDetails?.expertise.map((item) =>(<span key={item} className="px-4 py-1 bg-[#F9EBC3] text-[#C99600] font-bold rounded-full text-xs md:text-sm">{item}</span>))}
      </div>
      
      {/* Specializations Section */}
      <h3 className="text-lg md:text-xl font-bold text-[#023C3D] mb-4 md:mb-8 mt-4">Specializations</h3>
      <div className="flex flex-col md:flex-row gap-2 md:space-x-4 mb-6 md:mb-8">
        {DrDetails?.specialization.map((item) => (
          <div key={item} className="px-4 py-2 border border-blue-500 text-blue-500 flex items-center">
            <Image 
              src="/images/bullet.png" 
              alt="bullet" 
              width={16} 
              height={16} 
              className="mr-2"
            />
            <span className="text-xs md:text-sm">{item}</span>
          </div>
        ))}
      </div>

      {/* FAQs Section */}
      <h3 className="text-lg md:text-xl font-bold text-[#023C3D] mb-4 md:mb-8 mt-4">FAQs</h3>
      {DrDetails?.faq.map((item)=>(
      <div key={item} className="bg-[#B8DEE2] p-4 md:p-6 rounded-lg text-gray-700">
        <p className="font-bold flex items-center mb-2 text-sm md:text-base">💬 {item.question}?</p>
        <p className="text-xs md:text-base text-gray-700">{item.answer}</p>
      </div>))}
    </div>
  );
};

export default AboutComponent;