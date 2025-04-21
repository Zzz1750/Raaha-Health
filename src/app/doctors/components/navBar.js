import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 md:px-10 py-4 bg-white shadow-sm">
     
     <div className="flex items-center">
        <Link href="/" className="relative w-[180px] h-[45px] mt-2">
          <Image 
            src="/images/DoctorDashboard/logo.png" 
            alt="Raaha Logo" 
            fill
            priority
            className="object-contain scale-150"
          />
        </Link>
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
    </nav>
  );
};

export default Navbar;