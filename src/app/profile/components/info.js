import React from 'react';
import Image from 'next/image';

const PersonalInfoComponent = () => {
  const userData = {
    firstName: 'Antony',
    lastName: 'Zharon',
    email: 'antony.zharon@gmail.com',
    phoneNumber: '8455412301',
    sex: 'Male',
    dateOfBirth: '18-10-2004'
  };

  return (
    <div id="info-section" className="p-4 sm:p-10 rounded-lg w-full bg-white">
      <div className="flex flex-row justify-between items-center mb-6 sm:mb-12">
        <h1 className="text-xl sm:text-2xl font-bold text-black">Personal Information</h1>
        <button className="flex items-center space-x-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-gray-400 hover:bg-gray-50">
          <span className="text-sm sm:text-base text-black">Edit</span>
          <Image 
            src="/images/pencil.png"
            alt="Edit"
            width={16}
            height={16}
            className="opacity-60 sm:w-4 sm:h-4"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">First Name</label>
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">{userData.firstName}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Last Name</label>
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">{userData.lastName}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Email</label>
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-6 break-words">{userData.email}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Phone Number</label>
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">{userData.phoneNumber}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Sex</label>
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-0">{userData.sex}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Date of Birth</label>
          <p className="text-black text-sm sm:text-base">{userData.dateOfBirth}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoComponent;