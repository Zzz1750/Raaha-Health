"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SessionTime({ selectedDate }) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const scrollRef = useRef(null);

  // Generate time slots (9:00 AM to 8:50 PM)
  const sessions = Array.from({ length: 12 }, (_, i) => {
    const startHour = 9 + i;
    const startTime = `${startHour > 12 ? startHour - 12 : startHour}:00${startHour >= 12 ? "pm" : "am"}`;
    const endTime = `${startHour > 12 ? startHour - 12 : startHour}:50${startHour >= 12 ? "pm" : "am"}`;
    return {
      timeString: `${startTime} - ${endTime}`,
      hour24: startHour,
      minutes: 0,
    };
  });

  // Update availability based on selected date
  useEffect(() => {
    const updateAvailability = () => {
      const now = new Date();
      
      // Check if selected date is today
      const isToday = selectedDate && 
                     selectedDate.getDate() === now.getDate() &&
                     selectedDate.getMonth() === now.getMonth() &&
                     selectedDate.getFullYear() === now.getFullYear();

      if (!isToday) {
        // For non-today dates, all slots are available
        setAvailableSlots(sessions.map(session => ({
          ...session,
          isAvailable: true
        })));
        return;
      }

      // For today's date, apply 1-hour time restriction
      const currentTotalMinutes = now.getHours() * 60 + now.getMinutes();
      const oneHourLater = currentTotalMinutes + 60; // 1-hour delay

      const updatedSessions = sessions.map(session => {
        const sessionStartMinutes = session.hour24 * 60 + session.minutes;
        return {
          ...session,
          isAvailable: sessionStartMinutes >= oneHourLater
        };
      });

      setAvailableSlots(updatedSessions);
    };

    updateAvailability();
    const timer = setInterval(updateAvailability, 60000);
    return () => clearInterval(timer);
  }, [selectedDate]);

  // Group sessions for mobile view
  const sessionGroups = [];
  for (let i = 0; i < sessions.length; i += 4) {
    sessionGroups.push(availableSlots.slice(i, i + 4));
  }

  const SCROLL_AMOUNT = 240;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    }
  };

  const handleSlotClick = (session) => {
    if (!session.isAvailable) return;
    setSelectedSlot(selectedSlot === session.timeString ? null : session.timeString);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-[600px] border border-gray-300 relative">
      {/* Mobile View */}
      <div className="relative sm:hidden flex items-center justify-between">
        <button onClick={scrollLeft} className="p-1 bg-white rounded-full shadow-md border border-gray-300 absolute left-[-15px] z-10">
          <ChevronLeft size={16} />
        </button>

        <div 
          ref={scrollRef} 
          className="overflow-x-auto scrollbar-hide scroll-smooth mx-auto"
          style={{ width: "232px", display: "flex", gap: "8px" }}
        >
          {sessionGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-2 gap-2" style={{ minWidth: "232px" }}>
              {group.map((session, index) => (
                <button
                  key={index}
                  onClick={() => handleSlotClick(session)}
                  className={`w-[112px] p-1 rounded-md text-[9px] font-medium transition flex items-center justify-center truncate
                    ${!session.isAvailable 
                      ? "border border-gray-300 text-gray-400 cursor-not-allowed" 
                      : selectedSlot === session.timeString 
                        ? "bg-[#043c3c] text-white border border-[#043c3c]" 
                        : "border border-[#043c3c] text-[#043c3c] hover:bg-[#043c3c] hover:text-white"
                    }`}
                  style={{ height: "35px" }}
                  disabled={!session.isAvailable}
                >
                  {session.timeString}
                </button>
              ))}
            </div>
          ))}
        </div>

        <button onClick={scrollRight} className="p-1 bg-white rounded-full shadow-md border border-gray-300 absolute right-[-15px] z-10">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-6 mt-4">
        {availableSlots.map((session, index) => (
          <button
            key={index}
            onClick={() => handleSlotClick(session)}
            className={`p-3 rounded-md text-sm font-medium transition flex items-center justify-center w-full
              ${!session.isAvailable 
                ? "border border-gray-300 text-gray-400 cursor-not-allowed" 
                : selectedSlot === session.timeString 
                  ? "bg-[#043c3c] text-white border border-[#043c3c]" 
                  : "border border-[#043c3c] text-[#043c3c] hover:bg-[#043c3c] hover:text-white"
              }`}
            disabled={!session.isAvailable}
          >
            {session.timeString}
          </button>
        ))}
      </div>
    </div>
  );
}