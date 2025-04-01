"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SessionTime() {
  const sessions = Array.from({ length: 12 }, (_, i) => {
    const startHour = 9 + i;
    const startTime = `${startHour > 12 ? startHour - 12 : startHour}:00${startHour >= 12 ? "pm" : "am"}`;
    const endTime = `${startHour > 12 ? startHour - 12 : startHour}:50${startHour >= 12 ? "pm" : "am"}`;
    return `${startTime} - ${endTime}`;
  });

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -240, behavior: "smooth" }); // Moves exactly 4 slots left
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 240, behavior: "smooth" }); // Moves exactly 4 slots right
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-[600px] border border-gray-300 relative">
      
      {/* Mobile View - 2x2 Grid with Scroll Arrows */}
      <div className="relative sm:hidden flex items-center justify-between">
        {/* Left Scroll Button */}
        <button 
          onClick={scrollLeft} 
          className="p-1 bg-white rounded-full shadow-md border border-gray-300 absolute left-[-8px]"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Scrollable 2x2 Grid */}
        <div 
          ref={scrollRef} 
          className="overflow-x-auto scrollbar-hide scroll-smooth mx-auto"
          style={{ 
            width: "220px", 
            display: "grid", 
            gridTemplateColumns: "repeat(6, 1fr)", 
            gridTemplateRows: "repeat(2, 1fr)", 
            gap: "4px"
          }}
        >
          {sessions.map((session, index) => (
            <button
              key={index}
              className="min-w-[100px] p-1 border border-[#043c3c] rounded-md text-[9px] font-medium 
              text-[#043c3c] hover:bg-[#043c3c] hover:text-white transition flex items-center justify-center truncate"
              style={{ height: "35px" }}
            >
              {session}
            </button>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button 
          onClick={scrollRight} 
          className="p-1 bg-white rounded-full shadow-md border border-gray-300 absolute right-[-8px]"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* PC View - 3x4 Grid (UNCHANGED) */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-4 mt-4">
        {sessions.map((session, index) => (
          <button
            key={index}
            className="p-3 border border-[#043c3c] rounded-md text-sm font-medium text-[#043c3c] 
            hover:bg-[#043c3c] hover:text-white transition flex items-center justify-center w-full"
          >
            {session}
          </button>
        ))}
      </div>
    </div>
  );
}