 'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
  // Filter Component
export const Filter = ({onJobselect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProfessional, setSelectedProfessional] = useState();
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
    useEffect(()=>{
      onJobselect(selectedProfessional)

    },[selectedProfessional])
    return (
      <div className="w-full">
        <div className=" relative flex md:justify-start sm:justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-[#13A4A0] border border-[#13A4A0] rounded-full shadow-sm hover:bg-opacity-80"
        >
          <span className="text-white font-medium">Filters</span>
          <Image src="/images/specialist/filter_button.png" alt="Filter Icon" className="w-4 h-4" width={16} height={16} />
        </button>
        </div>  
        {isOpen && (
          <div className="absolute mt-2 w-[90vw] sm:w-[400px] md:w-[500px] lg:w-[600px] bg-white border border-[#13A4A0] rounded-lg shadow-lg z-50 max-h-[90vh] overflow-auto">


            {/* Header */}
            <div className="flex justify-between items-center p-3 sm:p-4 border-b border-[#13A4A0]">
              <h2 className="text-lg sm:text-xl text-[#13A4A0] font-medium">Filters</h2>
              <button className="bg-green-400 text-white px-4 sm:px-6 py-1 sm:py-1.5 rounded-lg hover:bg-[#108F8B] transition-colors">
                Apply
              </button>
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
         {/* Professional Section */}
         <div className="flex flex-col justify-center items-center text-center ">
            <div className=" p-3 sm:p-4 border-b border-[#13A4A0]">
              <div className="flex items-center justify-center sm:flex-row sm:items-center gap-2 sm:gap-6">
                <div className="flex flex-wrap gap-2 p-3 sm:gap-3 bg-[#F3F6FB] rounded-3xl">
                    {[ "Psychiatrist", "Clinical Psychologist", "Counsellor"].map((role , index , array) => (
                      
                      <React.Fragment key={role}>
                    <button 
                      className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full  font-bold text-sm ${
                        selectedProfessional === role 
                          ? 'border bg-white text-[#13A4A0] border-[#575757]' 
                          : ' text-[#13A4A0] hover:bg-gray-50'
                      }`}
                      onClick={() => handleProfessionalSelect(role)}
                    >
                      {role}
                    </button>
                  {index < array.length - 1 && (
                    <span className="text-[#13A4A0] font-light text-xl px-1">|</span>
                  )}
                  </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  };
  
  