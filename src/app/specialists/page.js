"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const therapists = [
    {
      id: 1,
      name: "Dr. Seethalakshmi",
      experience: "3+ ",
      imageUrl: "/images/specialist/doctor.png",
      languages: [{ name: "Aa English", active: false}, { name: " आ Hindi", active: true }],
      qualification: "Masters in Clinical Psychology",
      expertise: ["Stress", "Grief & Loss", "Anxiety"],
      price: "2000",
      sessionDuration: "60",
      title: "Clinical Psychologist",
      sessionTypes: ["Online", "In-person"]
    },
    {
      id: 2,
      name: "Dr. Seethalakshmi",
      experience: "3+ ",
      imageUrl: "/images/specialist/doctor.png",
      languages: [{ name: "Aa English", active: false}, { name: " आ Hindi", active: true }],
      qualification: "Masters in Clinical Psychology",
      expertise: ["Stress", "Grief & Loss", "Anxiety"],
      price: "2000",
      sessionDuration: "60",
      title: "Clinical Psychologist",
      sessionTypes: ["Online", "In-person"]
    },
    {
      id: 3,
      name: "Dr. Seethalakshmi",
      experience: "3+ ",
      imageUrl: "/images/specialist/doctor.png",
      languages: [{ name: "Aa English", active: false}, { name: " आ Hindi", active: true }],
      qualification: "Masters in Clinical Psychology",
      expertise: ["Stress", "Grief & Loss", "Anxiety"],
      price: "2000",
      sessionDuration: "60",
      title: "Clinical Psychologist",
      sessionTypes: ["Online", "In-person"]
    },
  ];

  return (
    <div>
      <HeroSection />
      <div className="w-full px-4 sm:px-8 pt-8">
        <Filter />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-10 md:pl-40">
        {therapists.map((therapist) => (
          <TherapistCard key={therapist.id} {...therapist} />
        ))}
      </div>
    </div>
  );
}

const HeroSection = () => {
  return (
    <section
      className="relative h-[500px] sm:h-screen md:h-[700px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('images/specialist/bg.png')" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-start justify-center w-full">
        {/* Text Content */}
        <div className="bg-opacity-50 p-4 sm:p-6 rounded-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Let Us <span className="text-green-400">Help</span> You <br />
            Feel <span className="text-green-400">Better</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-200">
            Our trained professionals are focused on finding you <br className="hidden sm:block" />
            the help you need.
          </p>
          {/* Buttons */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:space-x-4">
            <button className="bg-white text-black px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 mb-3 sm:mb-0">
              Find My Therapist
            </button>
            <button className="border-2 border-white text-white px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-semibold shadow-md hover:bg-green-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Filter Component
const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState('Psychiatrist');
  const [selectedSession, setSelectedSession] = useState('In-person');
  const [selectedPrice, setSelectedPrice] = useState('1500-2000');
  
  // Handler functions for selections
  const handleProfessionalSelect = (value) => {
    setSelectedProfessional(value);
  };
  
  const handleSessionSelect = (value) => {
    setSelectedSession(value);
  };
  
  const handlePriceSelect = (value) => {
    setSelectedPrice(value);
  };

  return (
    <div className="relative w-full max-w-4xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#13A4A0] border border-[#13A4A0] rounded-full shadow-sm hover:bg-opacity-80"
      >
        <span className="text-white font-medium">Filters</span>
        <Image src="/images/specialist/filter_button.png" alt="Filter Icon" className="w-4 h-4" width={16} height={16} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full sm:w-[700px] md:w-[900px] bg-white border border-[#13A4A0] rounded-lg shadow-lg z-50">
          {/* Header */}
          <div className="flex justify-between items-center p-3 sm:p-4 border-b border-[#13A4A0]">
            <h2 className="text-lg sm:text-xl text-[#13A4A0] font-medium">Filters</h2>
            <button className="bg-green-400 text-white px-4 sm:px-6 py-1 sm:py-1.5 rounded-lg hover:bg-[#108F8B] transition-colors">
              Apply
            </button>
          </div>

          {/* Professional Section */}
          <div className="p-3 sm:p-4 border-b border-[#13A4A0]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <h3 className="text-md sm:text-lg text-[#13A4A0] whitespace-nowrap sm:min-w-[120px]">Professional</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button 
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-sm ${
                    selectedProfessional === 'Psychiatrist' 
                      ? 'bg-[#003C3A] text-[#13A4A0] border-[#003C3A]' 
                      : 'bg-white text-[#13A4A0] border-[#13A4A0] hover:bg-gray-50'
                  }`}
                  onClick={() => handleProfessionalSelect('Psychiatrist')}
                >
                  Psychiatrist
                </button>
                <button 
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-sm ${selectedProfessional === 'Clinical Psychologist' 
                    ? 'bg-[#003C3A] text-[#13A4A0] border-[#003C3A]' 
                    : 'bg-white text-[#13A4A0] border-[#13A4A0] hover:bg-gray-50'}`}
                  onClick={() => handleProfessionalSelect('Clinical Psychologist')}
                >
                  Clinical Psychologist
                </button>
                <button 
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-sm ${selectedProfessional === 'Counsellor' 
                    ? 'bg-[#003C3A] text-[#13A4A0] border-[#003C3A]' 
                    : 'bg-white text-[#13A4A0] border-[#13A4A0] hover:bg-gray-50'}`}
                  onClick={() => handleProfessionalSelect('Counsellor')}
                >
                  Counsellor
                </button>
              </div>
            </div>
          </div>

          {/* Session Section */}
          <div className="p-3 sm:p-4 border-b border-[#13A4A0]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <h3 className="text-md sm:text-lg text-[#13A4A0] whitespace-nowrap sm:min-w-[120px]">Session</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button 
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-sm ${
                    selectedSession === 'Online' 
                      ? 'bg-[#003C3A] text-[#13A4A0] border-[#003C3A]' 
                      : 'bg-white text-[#13A4A0] border-[#13A4A0] hover:bg-gray-50'
                  }`}
                  onClick={() => handleSessionSelect('Online')}
                >
                  Online
                </button>
                <button 
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-sm ${selectedSession === 'In-person' 
                    ? 'bg-[#003C3A] text-[#13A4A0] border-[#003C3A]' 
                    : 'bg-white text-[#13A4A0] border-[#13A4A0] hover:bg-gray-50'}`}
                  onClick={() => handleSessionSelect('In-person')}
                >
                  In-person
                </button>
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <h3 className="text-md sm:text-lg text-[#13A4A0] whitespace-nowrap sm:min-w-[120px]">Price</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['1000-1500', '1500-2000', '2000-2500', '2500-3000', '3000+'].map((price) => (
                  <button
                    key={price}
                    className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-sm ${
                      selectedPrice === price
                        ? 'bg-[#003C3A] text-[#13A4A0] border-[#003C3A]'
                        : 'bg-white text-[#13A4A0] border-[#13A4A0] hover:bg-gray-50'
                    }`}
                    onClick={() => handlePriceSelect(price)}
                  >
                    {price}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Therapist Card Component
const TherapistCard = ({ 
  name,
  title,
  experience,
  imageUrl,
  sessionTypes,
  languages,
  qualification,
  expertise,
  price,
  sessionDuration
}) => {
  return (
    <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-white border-black">
      <div className="flex flex-col sm:flex-row bg-white p-3 sm:p-4">
        {/* Photo section - Full width on mobile, left side on larger screens */}
        <div className="w-full sm:w-1/3 relative h-[200px] sm:h-[180px] rounded-lg overflow-hidden mb-3 sm:mb-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          <Image 
            src={imageUrl || '/images/specialist/doctor.png'}
            alt={name || 'Therapist'}
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
          <h2 className="text-xl font-bold text-black-900">{name}</h2>
          <p className="text-gray-500 font-bold text-sm">{title}</p>
          <p className="text-black-900 text-sm">{experience} yrs experience</p>
          
          {/* Session Types */}
          <p className="text-black font-bold mt-2 mb-1">Session</p>
          <div className="inline-flex bg-black overflow-hidden">
            {sessionTypes.map((type, index) => (
              <React.Fragment key={index}>
                <span className="px-2 sm:px-3 py-1 text-xs text-white">
                  {type}
                </span>
                {index < sessionTypes.length - 1 && (
                  <div className="w-px bg-white my-1"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Languages */}
          <div className="flex flex-wrap mt-3 gap-2 sm:space-x-2">
            {languages.map((lang, index) => (
              <div 
                key={index} 
                className={`flex items-center border rounded-full px-2 sm:px-3 py-1 ${
                  lang.active ? 'border-yellow-400' : 'border-red-500'
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${
                  lang.active ? 'bg-yellow-400' : 'bg-red-500'
                } mr-1 sm:mr-2`}></span>
                <span className="text-xs text-gray-700">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Middle section - Qualifications & Expertise */}
      <div className="px-3 sm:px-4 py-2 sm:py-3">
        <div className="mb-2 sm:mb-3">
          <p className="font-bold text-sm">Qualification:</p>
          <p className="text-sm text-gray-700">{qualification}</p>
        </div>
        
        <div>
          <p className="font-bold text-sm">Expertise:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {expertise.map((item, index) => (
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
          <p className="text-lg sm:text-xl font-bold">₹ {price}</p>
          <p className="text-xs sm:text-sm text-gray-600">{sessionDuration} min session</p>
        </div>
        <button className="bg-[#023C3D] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-sm hover:bg-[#108F8B] transition-colors">
          Book session
        </button>
      </div>
    </div>
  );
};