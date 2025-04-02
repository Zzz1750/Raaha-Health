"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import Calendar from "./components/Calendar";
import SessionTime from "./components/SessionTime";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function BookSession() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={`${inter.className} min-h-screen bg-gray-100 flex flex-col items-start p-6 sm:p-10`}>
      <h1 className="text-[#043c3c] text-4xl font-bold mb-8 sm:mb-12">Book Session</h1>

      <div className="w-full max-w-[600px]">
        <h2 className="text-[#043c3c] text-lg sm:text-xl font-medium text-center mb-4">Pick the date</h2>
        <Calendar onDateSelect={setSelectedDate} />
      </div>

      <div className="w-full max-w-[600px] mt-10">
        <h2 className="text-[#043c3c] text-lg sm:text-xl font-medium text-center mb-4">Pick session</h2>
        <SessionTime selectedDate={selectedDate} />
      </div>
    </div>
  );
}