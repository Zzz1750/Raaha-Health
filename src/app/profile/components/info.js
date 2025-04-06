'use client'
import React,{useState, useEffect} from 'react';
import Image from 'next/image';
import {updatePersonalInfo} from '../../../SERVICE/userService';
import { useSelector } from 'react-redux';

const PersonalInfoComponent = ({userDetails}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [userData , setUserData] = useState();
  const token = useSelector((state) => state.auth.accessToken);
  const onSubmit = async () => {
    try {
      const response = await updatePersonalInfo(userData , userDetails._id , token);
      console.log("Updated Data : ",response);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user details:', error);
      
    }
  }
  useEffect(() => {
    if (userDetails) {
      const dob = new Date(userDetails?.dob).toLocaleDateString();
      setUserData({
        firstName: userDetails?.username,
        email: userDetails?.email,
        phoneNumber: userDetails?.phone,
        sex: userDetails?.gender,
        dateOfBirth: dob
      });
    }
  }, [userDetails]);
  return (
    isEditing==false ? (
    <div id="info-section" className="p-4 sm:p-10 rounded-lg w-full bg-white">
      <div className="flex flex-row justify-between items-center mb-6 sm:mb-12">
        <h1 className="text-xl sm:text-2xl font-bold text-black">Personal Information</h1>
        <button onClick={() => {setIsEditing(!isEditing)}} className="flex items-center space-x-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-gray-400 hover:bg-gray-50">
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
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">{userData?.firstName}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Email</label>
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-6 break-words">{userData?.email}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Phone Number</label>
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">{userData?.phoneNumber}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Sex</label>
          <p className="text-black text-sm sm:text-base mb-4 sm:mb-0">{userData?.sex}</p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Date of Birth</label>
          <p className="text-black text-sm sm:text-base">{userData?.dateOfBirth}</p>
        </div>
      </div>
    </div>) : (
       <div id="info-section" className="p-4 sm:p-10 rounded-lg w-full bg-white">
       <div className="flex flex-row justify-between items-center mb-6 sm:mb-12">
         <h1 className="text-xl sm:text-2xl font-bold text-black">Personal Information</h1>
         <button onClick={onSubmit} className="flex items-center space-x-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-gray-400 hover:bg-gray-100 bg-emerald-700">
           <span className="text-sm sm:text-base text-black">Submit</span>
         </button>
       </div>
 
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
         <div>
           <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">First Name</label>
           <input type='text' onChange={(e) => {setUserData((prev) => ({...prev , firstName: e.target.value}))}} className="border rounded text-black text-sm sm:text-base mb-4 sm:mb-6" value={userData.firstName} />
         </div>
 
         <div>
           <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Email</label>
           <input type='text' disabled className="border rounded text-black text-sm sm:text-base mb-4 sm:mb-6 break-words" value={userData.email} />
         </div>
 
         <div>
           <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Phone Number</label>
           <input type='text' onChange={(e) => {setUserData((prev) => ({...prev , phoneNumber: e.target.value}))}} className="border rounded text-black text-sm sm:text-base mb-4 sm:mb-6" value={userData.phoneNumber} />
         </div>
 
         <div>
           <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Sex</label>
           <input type='text' onChange={(e) => {setUserData((prev) => ({...prev , sex: e.target.value}))}}  className="border rounded text-black text-sm sm:text-base mb-4 sm:mb-0" value={userData.sex} />
         </div>
 
         <div>
           <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">Date of Birth</label>
           <input type='text' onChange={(e) => {setUserData((prev) => ({...prev , dateOfBirth: e.target.value}))}} className="border rounded text-black text-sm sm:text-base" value={userData.dateOfBirth} />
         </div>
       </div>
     </div>
    )
  );
};

export default PersonalInfoComponent;