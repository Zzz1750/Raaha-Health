'use client';
import Sidebar from './components/sidebar';
import StatCard from './dashboard/components/statcard';
import AppointmentCard from './dashboard/components/appointmentcard';
import ClientRatingCard from './dashboard/components/clientratingcard';
import ClientStatisticsCard from './dashboard/components/clientstatisticscard';
import Navbar from './components/navbar';
import { useState } from 'react';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  const appointments = [
    { name: 'Antony Zharon', time: '08:00 - 08:50', avatar: '/images/DoctorDashboard/profile.png' },
    { name: 'Antony Zharon', time: '08:00 - 08:50', avatar: '/images/DoctorDashboard/profile.png' },
    { name: 'Antony Zharon', time: '08:00 - 08:50', avatar: '/images/DoctorDashboard/profile.png' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex relative">
        <div className={`fixed lg:static z-20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out h-[calc(100vh-64px)]`}>
          <Sidebar closeSidebar={() => setSidebarOpen(false)} />
        </div>
        <div className="flex-1 flex flex-col">
        
          <div className="lg:hidden fixed top-20 left-4 z-30">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 bg-white rounded-full shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-6 lg:p-8 xl:p-10 2xl:p-12">
            <div className="max-w-screen-2xl mx-auto">
              {/* Stats Cards */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mb-12 ml-0 sm:ml-4 lg:ml-0">
                <StatCard
                  iconSrc="/images/DoctorDashboard/client.png"
                  title="You have helped"
                  value="254 clients"
                  bgColor="bg-gradient-to-b from-[#05A0A3] to-[#023C3D]" 
                  textColor="text-white"
                />
                
                <StatCard
                  iconSrc="/images/DoctorDashboard/sessions.png"
                  title="Today you have"
                  value="4 sessions"
                  bgColor="bg-gradient-to-b from-[#3D023C] to-[#A305A0]"
                  textColor="text-white"
                />
                
                <StatCard
                  iconSrc="/images/DoctorDashboard/calender.png"
                  title="Sessions updated for"
                  value="5 days"
                  bgColor="bg-gradient-to-b from-[#A30805] to-[#3D0302]"
                  textColor="text-white"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-8 mb-8">
                <div className="flex justify-center lg:justify-start">
                  <ClientRatingCard />
                </div>
                <div className="flex justify-center lg:justify-end">
                  <AppointmentCard appointments={appointments} />
                </div>
              </div>

              {/* Statistics Card */}
              <div className="mb-8 flex justify-center">
                <div className="w-full">
                  <ClientStatisticsCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}