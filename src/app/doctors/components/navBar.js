import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="bg-white rounded-xl p-6 w-full sm:w-44 md:w-64 lg:w-72">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Menu</h2>

      {/* Top Navigation */}
      <div className="flex flex-col gap-4">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item.id)} // Set active item on click
            className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition ${
              activeItem === item.id ? "text-primary font-semibold" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <item.icon className={`w-5 h-5 ${activeItem === item.id ? "text-primary" : "text-gray-600"}`} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      
      
      <div className="flex items-center space-x-5">
        <button className="text-gray-700 focus:outline-none">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </button>
        
        <div className="flex items-center space-x-3">
          <Image 
            src="/images/DoctorDashboard/avatar.png" 
            alt="User Avatar" 
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="hidden md:flex flex-col">
            <span className="text-sm font-semibold text-gray-800">Dr Seetalakshmi</span>
            <span className="text-xs text-gray-500">Clinical Psychologist</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBar;