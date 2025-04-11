 'use client';
import React, { useState } from 'react';
import Image from 'next/image';
  // Filter Component
export const Filter = () => {
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
  
  