// components/SessionBooking.jsx
'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {formattedSlots} from '../components/slotFormatter';

export default function SessionsComponent({doctorDetails,Slots}) {
  const [sessionType, setSessionType] = useState('Online');
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState(null);
  
  
  const SortedSlots = Slots? formattedSlots(Slots) : [];
 
  

  const clinicDetails = {
    name: `${doctorDetails?.address.clinicName}`,
    address: `${doctorDetails?.address.area}, ${doctorDetails?.address.building}, ${doctorDetails?.address.city}` ,
    pincode: `${doctorDetails?.address.pincode}, India`
  };

  return (
    <div className="flex justify-start items-start md:ml-20 px-4 md:px-0">
      <div className="w-full max-w-3xl text-left p-4 md:p-8 font-inter bg-white overflow-y-auto">
        <h2 className="text-lg font-bold text-[#023C3D] mb-8 md:mb-12 -mt-4 md:mt-16">Session Availability</h2>
        
        {/* Session Type Selection */}
        <div className="grid grid-cols-2 gap-2 mb-6 border rounded-md overflow-hidden">
          <button 
            className={`py-2 px-4 text-center text-[#023C3D] font-semibold ${sessionType === 'Online' ? 'bg-teal-100' : 'bg-white'}`}
            onClick={() => setSessionType('Online')}
          >
            Online
          </button>
          <button 
            className={`py-2 px-4 text-center text-[#023C3D] font-semibold ${sessionType === 'Offline' ? 'bg-teal-100' : 'bg-white'}`}
            onClick={() => setSessionType('Offline')}
          >
            Offline
          </button>
        </div>
        
        {/* Session Mode Selection */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 border rounded-md p-4 md:p-6">
          {sessionType === 'Online' ? (
            <>
              <div className="flex flex-col items-center">
                <div className="w-24 md:w-28 h-20 md:h-24 bg-[#023C3D] flex flex-col items-center justify-center rounded-lg">
                  <Image src="/images/video.png" alt="Video" width={32} height={32} className="text-white mb-2 md:w-10 md:h-10" />
                  <span className="text-xs md:text-sm text-white">Video</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 md:w-28 h-20 md:h-24 border-2 border-gray-300 flex flex-col items-center justify-center rounded-md">
                  <Image src="/images/call.png" alt="Call" width={32} height={32} className="text-gray-400 mb-2 md:w-10 md:h-10" />
                  <span className="text-xs md:text-sm text-gray-500">Call</span>
                </div>
              </div>
              <div className="col-span-2 text-xs text-gray-500 mt-4">
                You will receive an e-mail with the link for the session after the booking is complete.
              </div>
            </>
          ) : (
            <div className="col-span-2 p-2 md:p-4">
              <h3 className="font-bold mb-1 text-[#023C3D] text-sm md:text-base">{clinicDetails.name}</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-2">
                {clinicDetails.address}<br />
                {clinicDetails.pincode}
              </p>
              <a 
                href={`${doctorDetails?.address.clinicLocation}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#00B2FF]"
              >
                <Image
                  src="/images/map.png"
                  alt="Map Pin"
                  width={16}
                  height={16}
                  className="mr-1"
                />
                View in Google Maps
              </a>
            </div>
          )}
        </div>
        
        {/* Date Selection */}
        <h2 className="text-lg font-bold text-[#023C3D] mb-4 mt-8 md:mt-16">Date And Time</h2>
        
        <div className="relative flex items-center mb-6">
          <button className="absolute left-0 bg-white rounded-full p-0 z-10">
            <Image src="/images/previous.png" alt="Previous" width={20} height={20} className="md:w-6 md:h-6" />
          </button>
          
          <div className="flex justify-between items-center space-x-4 md:space-x-8 overflow-x-auto py-2 md:py-4 px-6 md:px-8">
            {Object.entries(SortedSlots).map(([item , slots]) => (
              <button
                key={item}
                onClick={() => setSelectedDate(item)}
                className={`flex flex-col items-center justify-center border border-[#D9D9D9] min-w-[4.5rem] md:min-w-20 p-2 rounded-md ${
                  selectedDate === item ? 'bg-[#10909D]/52' : 'bg-white'
                }`}
              >
                <span className="font-bold text-sm md:text-base text-black">{item}</span>
                <span className="text-[10px] md:text-xs text-black">{slots.length}</span>
              </button>
            ))}
          </div>
          
          <button className="absolute right-0 bg-white rounded-full p-0 z-10">
            <Image src="/images/next.png" alt="Next" width={20} height={20} className="md:w-6 md:h-6" />
          </button>
        </div>
        
        {/* Time Selection */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:space-x-8">
            {SortedSlots[selectedDate]?.map((time) => (
              <button
                key={time.startTime}
                onClick={() => setSelectedTime(time)}
                className={`px-2 md:px-3 py-1 md:py-2 border rounded-md text-xs md:text-sm text-[#023C3D] ${
                  selectedTime === time ? 'bg-[#B8DEE2] border-[#B8DEE2]' : 'bg-white border-[#D9D9D9]'
                }`}
              >
                {time.startTime} - {time.endTime}
              </button>
            ))}
          </div>
          </div>
        </div>
      </div>

  );
}