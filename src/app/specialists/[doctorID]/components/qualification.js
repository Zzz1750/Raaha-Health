import React from "react";
import Image from "next/image";

const QualificationsComponent = (doctorDetails) => {
  const DrDetails = doctorDetails.doctorDetails
  return (
    <div className=" left-0 h-full w-full bg-white p-8 overflow-y-auto">
      
        <div className="mb-16">
          <h2 className="text-2xl font-bold flex items-center mb-8 -mt-8 md:mt-16 text-black">
            <Image src="/images/education.png" alt="Education Icon" width={24} height={24} className="mr-2" />
            Qualification & Education
          </h2>
          <div className="space-y-4">
           {DrDetails?.qualification.map((item) => (<div key={item} className="flex items-start">
              <Image src="/images/degree.png" alt="Degree Icon" width={20} height={20} className="mr-2" />
              <p className="text-black">{item}</p>
            </div>))}
          </div>
        </div>

      
        <div>
          <h2 className="text-2xl font-bold flex items-center mb-6 text-black">
            <Image src="/images/experience.png" alt="Experience Icon" width={24} height={24} className="mr-2" />
            Experience
          </h2>
          <div className="space-y-4">
            {DrDetails?.jobExperience.map((item)=>(<div key={item} className="flex items-start">
              <Image src="/images/authentic.png" alt="Job Icon" width={20} height={20} className="mr-2" />
              <p className="text-black">
                {item}
              </p>
            </div>))}
          </div>
        </div>
      </div>
  
  );
};

export default QualificationsComponent;
