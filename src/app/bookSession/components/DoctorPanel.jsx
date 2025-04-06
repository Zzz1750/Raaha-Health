"use client";
import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
});

export default function DoctorPanel({ searchQuery }) {
  const doctors = [
    {
      id: 1,
      name: "Dr. Seethalakshmi",
      title: "Clinical Psychologist",
      experience: "3+ yrs experience",
      imageUrl: "/images/doctor.png",
      sessionTypes: ["Online", "In-person"],
      languages: [{ name: "English", active: true }, { name: "Hindi", active: true }],
      qualification: "Masters in Clinical Psychology",
      expertise: ["Stress", "Grief & Loss", "Anxiety"],
      price: "2000",
      sessionDuration: "60 min session"
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      title: "Psychiatrist",
      experience: "8+ yrs experience",
      imageUrl: "/images/doctor.png",
      sessionTypes: ["Online"],
      languages: [{ name: "English", active: true }, { name: "Tamil", active: true }],
      qualification: "MD in Psychiatry",
      expertise: ["Depression", "Bipolar Disorder", "Schizophrenia"],
      price: "2500",
      sessionDuration: "45 min session"
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      title: "Counsellor",
      experience: "5+ yrs experience",
      imageUrl: "/images/doctor.png",
      sessionTypes: ["In-person"],
      languages: [{ name: "English", active: true }, { name: "Marathi", active: false }],
      qualification: "Masters in Counselling Psychology",
      expertise: ["Relationship Issues", "Career Counseling", "Self-Esteem"],
      price: "1800",
      sessionDuration: "50 min session"
    },
    {
      id: 4,
      name: "Dr. Amit Patel",
      title: "Neuropsychologist",
      experience: "10+ yrs experience",
      imageUrl: "/images/doctor.png",
      sessionTypes: ["Online", "In-person"],
      languages: [{ name: "English", active: true }, { name: "Gujarati", active: true }],
      qualification: "PhD in Neuropsychology",
      expertise: ["Memory Disorders", "ADHD", "Traumatic Brain Injury"],
      price: "3000",
      sessionDuration: "60 min session"
    },
    {
      id: 5,
      name: "Dr. Ananya Reddy",
      title: "Child Psychologist",
      experience: "6+ yrs experience",
      imageUrl: "/images/doctor.png",
      sessionTypes: ["In-person"],
      languages: [{ name: "English", active: true }, { name: "Telugu", active: false }],
      qualification: "Masters in Child Psychology",
      expertise: ["Autism", "Learning Disabilities", "Behavioral Issues"],
      price: "2200",
      sessionDuration: "45 min session"
    }
  ];

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`space-y-4 ${inter.variable} font-sans`}>
      {filteredDoctors.map(doctor => (
        <div key={doctor.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white w-full">
          {/* Mobile Layout (stacked) */}
          <div className="sm:hidden flex flex-col">
            <div className="relative w-full h-48">
              <Image 
                src={doctor.imageUrl}
                alt={doctor.name}
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
              <h2 className="text-xl font-bold text-[#043c3c]">{doctor.name}</h2>
              <p className="text-gray-600 font-medium">{doctor.title}</p>
              <p className="text-sm text-gray-500">{doctor.experience}</p>
              
              <div className="mt-3">
                <p className="font-semibold text-sm mb-1">Session</p>
                <div className="inline-flex bg-black divide-x divide-white">
                  {doctor.sessionTypes.map((type, index) => (
                    <span key={index} className="px-3 py-1 text-xs text-white">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <p className="font-semibold text-sm mb-1">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((lang, index) => (
                    <div key={index} className={`flex items-center border rounded-full px-3 py-1 ${lang.active ? 'border-yellow-400' : 'border-red-500'}`}>
                      <span className={`h-2 w-2 rounded-full ${lang.active ? 'bg-yellow-400' : 'bg-red-500'} mr-2`}></span>
                      <span className="text-xs">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <p className="font-semibold text-sm">Qualification:</p>
                <p className="text-sm">{doctor.qualification}</p>
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
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  fill
                  className="object-cover"
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

              <div className="flex-1">
                <h2 className="text-xl font-bold text-[#043c3c]">{doctor.name}</h2>
                <p className="text-gray-600 font-medium">{doctor.title}</p>
                <p className="text-sm text-gray-500">{doctor.experience}</p>
                
                <div className="mt-3">
                  <p className="font-semibold text-sm mb-1">Session</p>
                  <div className="inline-flex bg-black divide-x divide-white">
                    {doctor.sessionTypes.map((type, index) => (
                      <span key={index} className="px-3 py-1 text-xs text-white">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <p className="font-semibold text-sm mb-1">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((lang, index) => (
                      <div key={index} className={`flex items-center border rounded-full px-3 py-1 ${lang.active ? 'border-yellow-400' : 'border-red-500'}`}>
                        <span className={`h-2 w-2 rounded-full ${lang.active ? 'bg-yellow-400' : 'bg-red-500'} mr-2`}></span>
                        <span className="text-xs">{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-3 border-t border-gray-200">
              <div className="mb-3">
                <p className="font-semibold text-sm">Qualification:</p>
                <p className="text-sm">{doctor.qualification}</p>
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
              <button className="bg-teal-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition">
                Book session
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}