'use client';
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// Therapist Card Component
export const TherapistCard = ({doctor}) => {
    console.log(doctor)
    const router = useRouter();
    return (
      <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-white border-black">
        <div className="flex flex-col sm:flex-row bg-white p-3 sm:p-4">
          {/* Photo section - Full width on mobile, left side on larger screens */}
          <div className="w-full sm:w-1/3 relative h-[200px] sm:h-[180px] rounded-lg overflow-hidden mb-3 sm:mb-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
{/* change the image logic IMPORTANT*/}
            <Image 
              src={'/'+doctor.img ? '/images/specialist/doctor.png' : '/images/specialist/doctor.png'}
              alt={doctor?.firstname || 'Therapist'}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, 25vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0">
              <button className="w-full text-xs text-white bg-[#545454] hover:bg-black/70 transition-colors py-2 sm:py-2.5 text-center uppercase tracking-wide font-medium">
                View Profile
              </button>
            </div>
          </div>
          
          {/* Basic info section - Added more left padding */}
          <div className="w-full sm:w-2/3 p-0 sm:p-4 sm:pl-8"> {/* Added sm:pl-8 for more padding */}
            <h2 className="text-xl font-bold text-black-900">{doctor?.firstname}</h2>
            <p className="text-gray-500 font-bold text-sm">{doctor?.title}</p>
            <p className="text-black-900 text-sm">{doctor?.experience} yrs experience</p>
            
            {/* Session Types */}
            <p className="text-black font-bold mt-2 mb-1">Session</p>
            <div className="inline-flex bg-black overflow-hidden">
              {doctor?.sessionAvailability.map((type, index) => (
                <React.Fragment key={index}>
                  <span className="px-2 sm:px-3 py-1 text-xs text-white">
                    {type}
                  </span>
                  {index < doctor?.sessionAvailability.length - 1 && (
                    <div className="w-px bg-white my-1"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* Languages */}
            <div className="flex flex-wrap mt-3 gap-2 sm:space-x-2">
              {doctor?.language?.map((lang) => (
                <div 
                  key={lang} 
                  className={`flex items-center border rounded-full px-2 sm:px-3 py-1 ${
                    lang ? 'border-yellow-400' : 'border-red-500'
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${
                    lang ? 'bg-yellow-400' : 'bg-red-500'
                  } mr-1 sm:mr-2`}></span>
                  <span className="text-xs text-gray-700">{lang}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Middle section - Qualifications & Expertise */}
        <div className="px-3 sm:px-4 py-2 sm:py-3">
          <div className="mb-2 sm:mb-3">
            <p className="font-bold text-sm">Qualification:</p>
            <p className="text-sm text-gray-700">{doctor.qualification}</p>
          </div>
          
          <div>
            <p className="font-bold text-sm">Expertise:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {doctor.expertise.map((item, index) => (
                <span 
                  key={index} 
                  className="bg-yellow-100 text-[#C99600] text-xs px-2 sm:px-3 py-1 rounded-full font-bold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom section - Pricing & Booking */}
        <div className="bg-[#13A4A0]/40 px-3 sm:px-4 py-3 flex justify-between items-center">
          <div>
            <p className="text-lg sm:text-xl font-bold">₹ {doctor.price}</p>
            <p className="text-xs sm:text-sm text-gray-600">{doctor.sessionDuration} min session</p>
          </div>
          <button onClick={() => {router.push(`/specialists/${doctor._id}`)}} className="bg-[#023C3D] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-sm hover:bg-[#108F8B] transition-colors">
            Book session
          </button>
        </div>
      </div>
    );
  };