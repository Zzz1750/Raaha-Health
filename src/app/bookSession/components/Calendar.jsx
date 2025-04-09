"use client";
import { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addMonths, subMonths, addDays, isToday } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Inter } from 'next/font/google';

// Initialize Inter font
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
});

export default function Calendar({ onDateSelect }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = format(new Date(), "yyyy-MM-dd"); 
  const [selectedDate, setSelectedDate] = useState(today);

  // Set today as default selected date
  useEffect(() => {
    onDateSelect(today);
  }, []);

  // Get days for current month view
  const firstDayOfMonth = startOfMonth(currentMonth);
  const lastDayOfMonth = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });

  // Create array of next 7 days (today + 6 days ahead)
  const next7Days = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(today, i);
    return {
      dateString: format(date, "yyyy-MM-dd"),
      dateObj: date,
      isToday: isToday(date)
    };
  });

  const handleDateClick = (day) => {
    const formattedDay = format(day, "yyyy-MM-dd");
    const isClickable = next7Days.some(d => d.dateString === formattedDay);

    if (!isClickable) return;

    const selectedDateObj = next7Days.find(d => d.dateString === formattedDay)?.dateObj;
    setSelectedDate(selectedDateObj);
    onDateSelect(formattedDay);
  };

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-[600px] ${inter.variable} font-sans`}>
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="p-2 text-[#043c3c] hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        
        <h2 className="text-lg font-semibold text-[#043c3c]">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        
        <button 
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-2 text-[#043c3c] hover:bg-gray-100 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells for days before month starts */}
        {Array(getDay(firstDayOfMonth)).fill(null).map((_, index) => (
          <div key={`empty-${index}`} className="h-10"></div>
        ))}

        {/* Month days */}
        {days.map((day) => {
          const formattedDay = format(day, "yyyy-MM-dd");
          const isClickable = next7Days.some(d => d.dateString === formattedDay);
          const isSelected = selectedDate && format(selectedDate, "yyyy-MM-dd") === formattedDay;
          const isTodayDate = next7Days.find(d => d.dateString === formattedDay)?.isToday;

          return (
            <button
              key={formattedDay}
              onClick={() => handleDateClick(day)}
              className={`h-10 rounded-md text-sm transition
                ${isClickable
                  ? isTodayDate
                    ? "text-blue-600 font-bold"
                    : "text-[#043c3c] hover:bg-gray-100"
                  : "text-gray-300 cursor-default"
                }
                ${isSelected ? "bg-[#043c3c] text-white hover:bg-[#032828]" : ""}
              `}
              disabled={!isClickable}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}