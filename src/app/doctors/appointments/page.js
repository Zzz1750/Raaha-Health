"use client";
import AppointmentList from "./components/appointmentDetails";
export default function Appointments() {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">

      <div className="flex w-full bg-gray-100">
      
      {/* Main Content Area */}
      <div className="flex-1  p-6">
        <AppointmentList />
      </div>
      </div>
    </div>
  );
}
