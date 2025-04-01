import React from "react";
import Image from "next/image";
import { Poppins} from "next/font/google";
const poppins = Poppins({ weight: ['100'], subsets: ["latin"] });


const AboutComponent = () => {
  return (
    <div className="w-full px-4 md:px-4 py-4 md:py-8 text-left md:ml-10">
      {/* About Section */}
      <h2 className="text-[20px] md:text-2xl font-bold text-[#023C3D] mb-4 -mt-8 md:mt-16">About Dr Seethalakshmi</h2>
      <p className="text-sm md:text-base text-black font-medium  mb-6 md:mb-8">
        Hi, I'm Seethalakshmi, a proficient counseling psychologist with a rich therapeutic journey spanning over 3 years 
        and helping numerous clients with varied populations from ages 18 and onwards. Throughout my practice, I have 
        addressed a comprehensive range of concerns, such as Anxiety issues, Depression, Stress, Relationship issues, 
        Phobias, Grief, and other mental health disorders. In my practice, I employ an eclectic approach of evidence-based 
        techniques alongside empathy and acceptance to provide effective and personalized treatment.
      </p> 

      {/* Languages Section */}
      <h3 className="text-lg md:text-xl font-bold text-[#023C3D] mb-4 md:mb-8">Languages</h3>
      <div className="flex flex-wrap gap-2 md:space-x-3 mb-6 md:mb-8">
        <span className="px-3 py-1 border border-yellow-500 text-black rounded-full text-xs md:text-sm">अ Hindi</span>
        <span className="px-3 py-1 border border-red-500 text-black rounded-full text-xs md:text-sm">Aa English</span>
      </div>

      {/* Expertise Section */}
      <h3 className="text-lg md:text-xl font-bold text-[#023C3D] mb-4 md:mb-8 mt-4">Expertise</h3>
      <div className="flex flex-wrap gap-2 md:space-x-3 mb-6 md:mb-8">
        <span className="px-4 py-1 bg-[#F9EBC3] text-[#C99600] font-bold rounded-full text-xs md:text-sm">Stress</span>
        <span className="px-4 py-1 bg-[#F9EBC3] text-[#C99600] font-bold rounded-full text-xs md:text-sm">Grief & Loss</span>
        <span className="px-4 py-1 bg-[#F9EBC3] text-[#C99600] font-bold rounded-full text-xs md:text-sm">Anxiety</span>
      </div>

      {/* Specializations Section */}
      <h3 className="text-lg md:text-xl font-bold text-[#023C3D] mb-4 md:mb-8 mt-4">Specializations</h3>
      <div className="flex flex-col md:flex-row gap-2 md:space-x-4 mb-6 md:mb-8">
        {["Career & Workplace Counseling", "Family & Relationship Counseling", "Psychodynamic Therapy"].map((spec) => (
          <div key={spec} className="px-4 py-2 border border-blue-500 text-blue-500 flex items-center">
            <Image 
              src="/images/bullet.png" 
              alt="bullet" 
              width={16} 
              height={16} 
              className="mr-2"
            />
            <span className="text-xs md:text-sm">{spec}</span>
          </div>
        ))}
      </div>

      {/* FAQs Section */}
      <h3 className="text-lg md:text-xl font-bold text-[#023C3D] mb-4 md:mb-8 mt-4">FAQs</h3>
      <div className="bg-[#B8DEE2] p-4 md:p-6 rounded-lg text-gray-700">
        <p className="font-bold flex items-center mb-2 text-sm md:text-base">💬 What would you like to tell a client who comes to you for therapy?</p>
        <p className="text-xs md:text-base text-gray-700">
          I would like to say that – Come for what you want and stay for what you discover. There is no pre-assigned format 
          to therapy when you walk into one. This can be both overwhelming and/or liberating. I would like to say that – be 
          open to both sides of this experience. It's okay to feel cluttered, confused, hyperaware, or too organized in a session. 
          As we move into unfolding the nature of the therapeutic experiences in our sessions based on the expectations we set, 
          we would slowly make sense of the process it entails. Remember, it's always this process-based journey, and there is 
          no right or wrong way of addressing the same.
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;