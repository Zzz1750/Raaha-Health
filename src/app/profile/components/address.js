import React from 'react';
import Image from 'next/image';

const PersonalAddressComponent = () => {
  const userData = {
    country: 'India',
    state: 'Kerala',
    district: 'Kozhikode',
    pincode: '673006',
  };

  return (
    <div id="address-section" className="p-4 sm:p-10 rounded-lg w-full min-h-[300px] bg-white">
      <div className="flex flex-row justify-between items-center mb-6 sm:mb-12">
        <h1 className="text-xl sm:text-2xl font-bold text-black">Address</h1>
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
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Country</label>
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">{userData.country}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">State</label>
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">{userData.state}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">City/District</label>
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-0">{userData.district}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Pincode</label>
          <p className="text-black text-sm sm:text-base">{userData.pincode}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalAddressComponent;