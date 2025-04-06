"use client";
import { useState } from "react";
import Calendar from "./components/Calendar";
import SessionTime from "./components/SessionTime";
import DoctorPanel from "./components/DoctorPanel";
import { Inter } from 'next/font/google';

// Initialize Inter font
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
});

export default function BookSession() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={`min-h-screen bg-[#f3f6fb] ${inter.variable} font-sans`}>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-[#043c3c] mb-8">Book Session</h1>
        
        {/* Top Row - Calendar and Session */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Left Column - Calendar */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-medium text-[#043c3c] mb-4">Pick the date</h2>
            <Calendar onDateSelect={setSelectedDate} />
          </div>
          
          {/* Right Column - Session */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-medium text-[#043c3c] mb-4">Pick session</h2>
            <SessionTime selectedDate={selectedDate} />
          </div>
        </div>

        {/* Bottom Row - Doctor Panel */}
        <div className="w-full">
          <div className="max-w-4xl mx-auto"> {/* Centered container with max width */}
            <h2 className="text-2xl font-bold text-[#043c3c] mb-4">Find Your Doctor</h2>
            
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search doctors by name..."
                className="w-full bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#043c3c]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="h-[calc(100vh-300px)] overflow-y-auto">
              <DoctorPanel searchQuery={searchQuery} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}