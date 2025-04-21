'use client';
import React from 'react';
import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export default function ClientStatisticsCard() {
  return (
    <div className={`bg-white p-5 lg:p-6 xl:p-8 rounded-lg shadow-sm w-full max-w-7xl mx-auto ${ibmPlexSans.className}`} style={{ borderRadius: '50px' }}>
      <h3 className={`ml-5 lg:ml-6 text-lg lg:text-xl font-semibold text-gray-800 mb-4 ${ibmPlexSans.className}`}>Client Statistics</h3>
      
      <div className={`h-48 sm:h-64 lg:h-72 xl:h-80 w-full flex items-center justify-center bg-gray-50 rounded ${ibmPlexSans.className}`}>
        <p className={`text-gray-400 ${ibmPlexSans.className}`}>Client statistics data</p>
      </div>
    </div>
  );
}