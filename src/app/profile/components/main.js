'use client'
import React from 'react';
import Image from 'next/image';

const ProfileComponent = ({userDetails}) => {
  const user = {
    name: `${userDetails?.username}`,
    email: `${userDetails?.email}`,
    profileImage: '/images/profile.png' 
  };

  return (
    <div id="profile-section">
      <h1 className="text-xl sm:text-2xl font-bold text-black">Profile</h1>
      
      <div className="border rounded-lg p-4 sm:p-6 mt-4 sm:mt-6 flex flex-col sm:flex-row items-center border-2 border-gray-400 min-h-[180px] w-full">
        <div className="mb-4 sm:mb-0 sm:mr-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center overflow-hidden">
            <Image 
              src={user.profileImage} 
              alt="Profile Icon" 
              width={128} 
              height={128} 
              className="rounded-full"
            />
          </div>
        </div>
        
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-1 sm:mb-2">{user.name}</h2>
          <p className="text-sm sm:text-base text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;

