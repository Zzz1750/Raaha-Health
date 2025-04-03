'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar';
import ProfileComponent from './components/main';
import PersonalInfoComponent from './components/info';
import SessionHistoryComponent from './components/history';
import PersonalAddressComponent from './components/address';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      

      checkMobile();
  
      window.addEventListener('resize', checkMobile);
      
   
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  return (
    <div className="flex flex-col sm:flex-row bg-white">
      {isMobile ? (
       
        <>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <main className="flex-grow p-4">
            <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
              <ProfileComponent />
              
              <div className="bg-white rounded-lg shadow p-4 border border-gray-600">
                <PersonalInfoComponent />
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 border border-gray-600">
                <PersonalAddressComponent />
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
              <ProfileComponent />
              
              <div className="bg-white rounded-lg shadow p-6 border border-gray-600">
                <PersonalInfoComponent />
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 border border-gray-600">
                <PersonalAddressComponent />
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