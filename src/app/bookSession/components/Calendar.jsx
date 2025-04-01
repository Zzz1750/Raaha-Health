"use client";
import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addMonths, subMonths, addDays } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();

  const firstDayOfMonth = startOfMonth(currentMonth);
  const lastDayOfMonth = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });

  const next7Days = Array.from({ length: 8 }, (_, i) => format(addDays(today, i), "yyyy-MM-dd"));
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (day) => {
    const formattedDay = format(day, "yyyy-MM-dd");

    if (!next7Days.includes(formattedDay)) return; 

    setSelectedDate(selectedDate === formattedDay ? null : formattedDay);

    console.log("Selected Date:", selectedDate === formattedDay ? "None" : formattedDay);
  };

  return (
    <div className="p-3 bg-white shadow-lg rounded-lg w-full max-w-[600px] h-auto border border-gray-300">

      <div className="flex justify-between items-center text-[#043c3c] text-base font-bold mb-2">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="text-[#043c3c] hover:text-[#043c3c]">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xs sm:text-sm">{format(currentMonth, "MMMM yyyy")}</h2>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="text-[#043c3c] hover:text-[#043c3c]">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-gray-800">

        {/* Weekday Headings */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-semibold text-xs sm:text-sm text-gray-600 w-full">
            {day}
          </div>
        ))}

        {/* Empty spaces for first row alignment */}
        {Array(getDay(firstDayOfMonth)).fill(null).map((_, index) => (
          <div key={index} className="w-full"></div>
        ))}

        {/* Calendar Days */}
        {days.map((day) => {
          const formattedDay = format(day, "yyyy-MM-dd");
          const isClickable = next7Days.includes(formattedDay);
          const isSelected = selectedDate === formattedDay;

          return (
            <button
              key={formattedDay}
              onClick={() => handleDateClick(day)}
              className={`p-1 w-full h-8 sm:h-10 rounded-md text-xs sm:text-sm font-medium transition ${
                isClickable
                  ? "text-[#043c3c]" 
                  : "opacity-20 text-gray-400" 
              } ${isSelected ? "bg-[#043c3c] text-white font-bold" : ""}`} 
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}
