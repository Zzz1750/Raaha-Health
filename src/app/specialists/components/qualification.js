import React from "react";
import Image from "next/image";

const QualificationsComponent = () => {
  return (
    <div className=" left-0 h-full w-full bg-white p-8 overflow-y-auto">
      
        <div className="mb-16">
          <h2 className="text-2xl font-bold flex items-center mb-8 -mt-8 md:mt-16 text-black">
            <Image src="/images/education.png" alt="Education Icon" width={24} height={24} className="mr-2" />
            Qualification & Education
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <Image src="/images/degree.png" alt="Degree Icon" width={20} height={20} className="mr-2" />
              <p className="text-black">BA in Psychology - Bangalore University (Jun 2018 - May 2021)</p>
            </div>
            <div className="flex items-start">
              <Image src="/images/degree.png" alt="Degree Icon" width={20} height={20} className="mr-2" />
              <p className="text-black">
                Master's degree, Industrial And Organizational Psychology - Jain (Deemed-to-be University) (Jun 2018 - May 2021)
              </p>
            </div>
            <div className="flex items-start">
              <Image src="/images/degree.png" alt="Diploma Icon" width={20} height={20} className="mr-2" />
              <p className="text-black">Diploma, Relationship Counselling - Alison (E-Learning Provider)</p>
            </div>
          </div>
        </div>

      
        <div>
          <h2 className="text-2xl font-bold flex items-center mb-6 text-black">
            <Image src="/images/experience.png" alt="Experience Icon" width={24} height={24} className="mr-2" />
            Experience
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <Image src="/images/authentic.png" alt="Job Icon" width={20} height={20} className="mr-2" />
              <p className="text-black">
                Resident Clinical Psychologist at the Air Force Central Medical Establishment (AFCME) (Jun 2022 - May 2024)
              </p>
            </div>
            <div className="flex items-start">
              <Image src="/images/authentic.png" alt="Job Icon" width={20} height={20} className="mr-2" />
              <p className="text-black">
                Resident Clinical Psychologist at the Air Force Central Medical Establishment (AFCME) (Jun 2022 - May 2024)
              </p>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default QualificationsComponent;
