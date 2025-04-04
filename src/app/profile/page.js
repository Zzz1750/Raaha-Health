'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar';
import ProfileComponent from './components/main';
import PersonalInfoComponent from './components/info';
import SessionHistoryComponent from './components/history';
import PersonalAddressComponent from './components/address';
import {getUserDetails} from '../../SERVICE/userService';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const [isMobile, setIsMobile] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const token = useSelector((state) => state.auth.accessToken);
  const userID = useSelector((state) => state?.auth?.user?.id);
  const fetchUserDetails = async () => {
    try {
      const response = await getUserDetails(userID , token);
      if (response) {
        setUserDetails(response);
      }
      console.log('User Details:', response);
    } 
    catch (error) {
      console.error('Error fetching user details:', error);
    }
  }
  useEffect(() => {
    if(userID && token) {
      fetchUserDetails();
    }

    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      

      checkMobile();
  
      window.addEventListener('resize', checkMobile);
      
   
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, [userID, token]);

  return (
    <div className="flex flex-col sm:flex-row bg-white">
      {isMobile ? (
       
        <>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <main className="flex-grow p-4">
            <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
              <ProfileComponent userDetails={userDetails}/>
              
              <div className="bg-white rounded-lg shadow p-4 border border-gray-600">
                <PersonalInfoComponent userDetails={userDetails}/>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 border border-gray-600">
                <PersonalAddressComponent userDetails={userDetails}/>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 border border-gray-600">
                <SessionHistoryComponent />
              </div>
            </div>
          </main>
        </>
      ) : (
   
        <>
          <div className="w-64 fixed left-0 top-0 h-full bg-white">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          
          <main className="ml-64 flex-grow p-10">
            <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
              <ProfileComponent userDetails={userDetails} />
              
              <div className="bg-white rounded-lg shadow p-6 border border-gray-600">
                <PersonalInfoComponent userDetails={userDetails}/>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 border border-gray-600">
                <PersonalAddressComponent userDetails={userDetails}/>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 border border-gray-600">
                <SessionHistoryComponent />
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default Dashboard;