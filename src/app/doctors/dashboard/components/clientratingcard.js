'use client';
import React from 'react';
import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export default function ClientRatingCard() {
  return (
    <div className={`bg-white p-5 lg:p-6 xl:p-8 shadow-sm w-full max-w-xl ${ibmPlexSans.className}`} style={{borderRadius:'50px'}}>
      <h3 className={`ml-5 lg:ml-6 text-lg lg:text-xl font-semibold text-gray-800 mb-4 ${ibmPlexSans.className}`}>Client Rating</h3>
      
      <div className={`h-36 sm:h-48 xl:h-56 w-full flex items-center justify-center bg-gray-50 rounded ${ibmPlexSans.className}`}>
        <p className={`text-gray-400 ${ibmPlexSans.className}`}>Client rating data</p>
      </div>
    </div>
  );
}