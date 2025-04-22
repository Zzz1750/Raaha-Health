'use client';
import Image from 'next/image';
import { useState } from 'react';
import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const NAV_ITEMS = [
  { 
    id: "dashboard", 
    src: "/images/DoctorDashboard/DoctorNavbarHome_Icon.png", 
    label: "Dashboard",
    className: ibmPlexSans.className 
  },
  { 
    id: "appointment", 
    src: "/images/DoctorDashboard/DoctorDashboard_Date-fill_Icon.png", 
    label: "Appointment",
    className: ibmPlexSans.className
  },
  { 
    id: "clients", 
    src: "/images/DoctorDashboard/DoctorDashboard_client_Icon.png", 
    label: "Clients",
    className: ibmPlexSans.className 
  },
  { 
    id: "earnings", 
    src: "/images/DoctorDashboard/DoctorDashboard_earning_Icon.png", 
    label: "Earnings",
    className: ibmPlexSans.className
  },
  { 
    id: "community", 
    src: "/images/DoctorDashboard/DocterDashboard_community_Icon.png", 
    label: "Community",
    className: ibmPlexSans.className 
  },
];

const FOOTER_ITEMS = [
  { id: "profile", src: "/images/DoctorDashboard/DocterDashboard_Profile_Icon.png", label: "Profile" },
  { id: "support", src:"/images/DoctorDashboard/DocterDashboard_FAQ_ICON.png", label: "Support & Help"},
  { id: "logout", src: "/images/DoctorDashboard/DocterDashboard_Logout_Icon.png", label: "Log Out", className: "text-red-500" },
];

export default function NavBar({ closeSidebar }) {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (id) => {
    setActiveItem(id);
    if (closeSidebar) closeSidebar();
  }

  return (
    <div
      className={`bg-white font-medium overflow-hidden p-6 lg:p-8 xl:p-10 shadow-md flex flex-col ml-0 lg:ml-5 mt-0 lg:mt-5 ${ibmPlexSans.className}`}
      style={{ 
        width: 'min(300px, 90vw)',
        height: 'calc(100vh - 40px)',
        maxHeight: '920px',
        borderRadius: '50px' 
      }}
    >
      <style jsx global>{`
        .teal-filter {
          filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(130deg) brightness(118%) contrast(119%);
        }
      `}</style>

      <div className="flex justify-between items-center mb-6 lg:mb-8">
        <h2 className={`text-xl lg:text-2xl font-bold text-gray-900 mb-8 lg:mb-10 ml-8 lg:ml-10 ${ibmPlexSans.className}`}>Menu</h2>
        <button 
          onClick={closeSidebar} 
          className="lg:hidden text-gray-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-6 lg:gap-8">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className={`flex items-center gap-4 p-2 lg:p-3 cursor-pointer transition-colors rounded-md ${
              activeItem === item.id
                ? "text-teal-500 font-medium"
                : "text-gray-800 hover:bg-gray-50"
            } ${ibmPlexSans.className}`}
            
          >
            
            
            <div className={`transition-all ${activeItem === item.id ? "teal-filter" : ""}`}>
              <Image
                src={item.src}
                alt={item.label}
                width={20}
                height={20}
                className="w-5 h-5 lg:w-6 lg:h-6 object-contain"
              />
            </div>
            <p className={`text-base lg:text-lg ${activeItem === item.id ? "text-teal-500" : ""} ${ibmPlexSans.className}`}>
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 my-6 lg:my-8"></div>

      <div className="flex flex-col gap-6 lg:gap-8 mb-6 mt-auto">
        {FOOTER_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className={`flex items-center gap-4 p-2 lg:p-3 cursor-pointer transition-colors rounded-md ${
              item.id === "logout" 
                ? "text-red-500" 
                : activeItem === item.id
                  ? "text-teal-500 font-medium"
                  : "text-gray-800 hover:bg-gray-50"
            } ${ibmPlexSans.className}`}
          >
            <div className={`transition-all ${
              item.id === "logout" 
                ? "" 
                : activeItem === item.id 
                  ? "teal-filter" 
                  : ""
            }`}>
              <Image
                src={item.src}
                alt={item.label}
                width={20}
                height={20}
                className="w-5 h-5 lg:w-6 lg:h-6 object-contain"
              />
            </div>
            <p className="text-base lg:text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}