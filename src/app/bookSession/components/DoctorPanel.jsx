"use client";
import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import DefaultDoctorImg from '../../../../public/images/doctor.png'
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
});

export default function DoctorPanel({ searchQuery , doctors}) {
  const router = useRouter();
  const filteredDoctors = doctors?.filter(doctor =>
    doctor.firstname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`space-y-4 ${inter.variable} font-sans`}>
      {filteredDoctors.map(doctor => (
        <div key={doctor._id} className="border border-gray-200 rounded-lg overflow-hidden bg-white w-full">
          {/* Mobile Layout (stacked) */}
          <div className="sm:hidden flex flex-col">
            <div className="relative w-full h-48">
              <Image 
                src={doctor.img ? DefaultDoctorImg : DefaultDoctorImg}
                alt={doctor.firstname}
                fill
                className="object-cover object-top"
                style={{ objectPosition: 'top center' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/doctor.png";
                }}
              />
              <button className="absolute bottom-0 left-0 right-0 w-full text-xs text-white bg-[#545454] hover:bg-black/70 transition-colors py-2 text-center uppercase tracking-wide font-medium">
                VIEW PROFILE
              </button>
            </div>

            <div className="p-4">
              <h2 className="text-xl font-bold text-[#043c3c]">{doctor.firstname}</h2>
              <p className="text-gray-600 font-medium">{doctor.title}</p>
              <p className="text-sm text-gray-500">{doctor.experience}+ experience</p>
              
              <div className="mt-3">
                <p className="font-semibold text-sm mb-1">Session</p>
                <div className="inline-flex bg-black divide-x divide-white">
                  {doctor?.sessionAvailability?.map((type, index) => (
                    <span key={index} className="px-3 py-1 text-xs text-white">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <p className="font-semibold text-sm mb-1">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {doctor?.language.map((lang, index) => (
                    <div key={index} className={`flex items-center border rounded-full px-3 py-1 ${lang.active ? 'border-yellow-400' : 'border-red-500'}`}>
                      <span className={`h-2 w-2 rounded-full ${lang.active ? 'bg-yellow-400' : 'bg-red-500'} mr-2`}></span>
                      <span className="text-xs">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <p className="font-semibold text-sm">Qualification:</p>
                {doctor?.qualification.map((qual, index) => (
                  <p key={index} className="text-sm">{qual}</p>
                ))}
              </div>

              <div className="mt-3">
                <p className="font-semibold text-sm">Expertise:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {doctor.expertise.map((item, index) => (
                    <span key={index} className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="font-bold">₹{doctor.price}</p>
                  <p className="text-xs text-gray-600">{doctor.sessionDuration}</p>
                </div>
                <button className="bg-teal-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition">
                  Book session
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout (side-by-side) */}
          <div className="hidden sm:flex flex-col">
            <div className="flex p-4 gap-4">
              <div className="w-[120px] h-[160px] relative flex-shrink-0">
                <Image 
                  src={DefaultDoctorImg}
                  alt={doctor.firstname}
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'top center' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/doctor.png";
                  }}
                />
                <button onClick={()=> {router.push(`/specialists/${doctor._id}`)}} className="absolute bottom-0 left-0 right-0 w-full text-xs text-white bg-[#545454] hover:bg-black/70 transition-colors py-2 text-center uppercase tracking-wide font-medium">
                  VIEW PROFILE
                </button>
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-bold text-[#043c3c]">{doctor.firstname}</h2>
                <p className="text-gray-600 font-medium">{doctor.title}</p>
                <p className="text-sm text-gray-500">{doctor.experience}+ experience</p>
                
                <div className="mt-3">
                  <p className="font-semibold text-sm mb-1">Session</p>
                  <div className="inline-flex bg-black divide-x divide-white">
                    {doctor?.sessionAvailability?.map((type, index) => (
                      <span key={index} className="px-3 py-1 text-xs text-white">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <p className="font-semibold text-sm mb-1">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {doctor?.language.map((lang, index) => (
                      <div key={index} className={`flex items-center border rounded-full px-3 py-1 ${lang.active ? 'border-yellow-400' : 'border-red-500'}`}>
                        <span className={`h-2 w-2 rounded-full ${lang.active ? 'bg-yellow-400' : 'bg-red-500'} mr-2`}></span>
                        <span className="text-xs">{lang}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-3 border-t border-gray-200">
              <div className="mb-3">
                <p className="font-semibold text-sm">Qualification:</p>
                {doctor?.qualification.map((qual, index) => (
                  <p key={index} className="text-sm">{qual}</p>
                ))}
              </div>
              <div>
                <p className="font-semibold text-sm">Expertise:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {doctor.expertise.map((item, index) => (
                    <span key={index} className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-teal-50 px-4 py-3 flex justify-between items-center">
              <div>
                <p className="font-bold">₹{doctor.price}</p>
                <p className="text-xs text-gray-600">{doctor.sessionDuration}</p>
              </div>
              <button onClick={()=> {router.push(`/session-summary/${doctor._id}`)}} className="bg-teal-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition">
                Book session
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}