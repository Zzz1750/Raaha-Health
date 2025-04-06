"use client";
import React from "react";

const ProfileHeaderTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "about", label: "About Professional" },
    { id: "qualifications", label: "Qualifications & Experience" },
    { id: "sessions", label: "About Sessions" },
  ];

  return (
    <>
      {/* Mobile view remains unchanged */}
      <div className="md:hidden w-full bg-white shadow-sm fixed top-[250px] z-40">
        <div className="max-w-4xl mx-auto px-2">
          <nav className="flex overflow-x-auto justify-start items-center no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-4 text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "text-teal-500 font-bold border-b-2 border-teal-500"
                    : "text-black hover:text-teal-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>


      <div className="hidden md:block w-full bg-white shadow-sm fixed top-[300px] z-40">
        <div className="max-w-4xl  px-4 py-2 mx-auto">
          <nav className="relative flex flex-row items-center justify-start">
            
            <div className="flex-1">
              <button
                key={tabs[0].id}
                onClick={() => setActiveTab(tabs[0].id)}
                className={`py-3 px-4 text-base whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tabs[0].id
                    ? "text-teal-500 font-bold"
                    : "text-black hover:text-teal-500"
                }`}
              >
                {tabs[0].label}
              </button>
            </div>

            {/* Center aligned tab */}
            <div className="flex-1 text-center justify-center">
              <button
                key={tabs[1].id}
                onClick={() => setActiveTab(tabs[1].id)}
                className={`py-3 px-4 text-base whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tabs[1].id
                    ? "text-teal-500 font-bold "
                    : "text-black hover:text-teal-500"
                }`}
              >
                {tabs[1].label}
              </button>
            </div>

            {/* Right aligned tab */}
            <div className="flex-1 text-right justify-end">
              <button
                key={tabs[2].id}
                onClick={() => setActiveTab(tabs[2].id)}
                className={`py-3 px-4 text-base whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tabs[2].id
                    ? "text-teal-500 font-bold"
                    : "text-black hover:text-teal-500"
                }`}
              >
                {tabs[2].label}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ProfileHeaderTabs;
