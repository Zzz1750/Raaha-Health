import React, { useState ,useEffect} from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import {updatePersonalAddress} from '../../../SERVICE/userService';
const PersonalAddressComponent = ({userDetails}) => {
  const [userData , setUserData] = useState();
  const [isEditable, setIsEditable] = useState(false);
  const token = useSelector((state) => state.auth.accessToken);
  
  const updateAddress = async () => {
    try {
      const response = await updatePersonalAddress(userData , userDetails._id , token);
      console.log("Updated Data : ",response);
      setIsEditable(false);
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  }

  useEffect(() => {
    setUserData({
      country: 'India',
      state:userDetails?.state,
      district: userDetails?.city,
      pincode: userDetails?.pincode,
    });
  }, [userDetails]);

  return (
    isEditable==false ? ( 
    <div id="address-section" className="p-4 sm:p-10 rounded-lg w-full min-h-[300px] bg-white">
      <div className="flex flex-row justify-between items-center mb-6 sm:mb-12">
        <h1 className="text-xl sm:text-2xl font-bold text-black">Address</h1>
        <button onClick={()=>{setIsEditable(true)}} className="flex items-center space-x-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-gray-400 hover:bg-gray-50">
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
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">{userData?.country}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">State</label>
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">{userData?.state}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">City/District</label>
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-0">{userData?.district}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Pincode</label>
          <p className="text-black text-sm sm:text-base">{userData?.pincode}</p>
        </div>
      </div>
    </div>)
    : (
      <div id="address-section" className="p-4 sm:p-10 rounded-lg w-full min-h-[300px] bg-white">
      <div className="flex flex-row justify-between items-center mb-6 sm:mb-12">
        <h1 className="text-xl sm:text-2xl font-bold text-black">Address</h1>
        <button onClick={updateAddress} className="flex items-center space-x-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-gray-400 hover:bg-gray-300 bg-emerald-700 ">
          <span className="text-sm sm:text-base text-black">Submit</span>
        </button>
      </div>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Country</label>
          <input type='text' onChange={(e) => {setUserData((prev) => ({...prev , pincode: e.target.value}))}} className="text-black text-sm sm:text-base mb-4 sm:mb-6" value={userData?.country} />
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">State</label>
          <input type='text'onChange={(e) => {setUserData((prev) => ({...prev , state: e.target.value}))}} className="text-black text-sm sm:text-base mb-4 sm:mb-6" value={userData?.state} />
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">City/District</label>
          <input type='text' onChange={(e) => {setUserData((prev) => ({...prev , district: e.target.value}))}} className="text-black text-sm sm:text-base mb-4 sm:mb-0" value={userData?.district} />
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Pincode</label>
          <input type='text' onChange={(e) => {setUserData((prev) => ({...prev , pincode: e.target.value}))}} className="text-black text-sm sm:text-base" value={userData?.pincode} />
        </div>
      </div>
    </div>
    )
  );
};

export default PersonalAddressComponent;