"use client"
import { useState } from "react";
import ProfileCard from './components/header';
import ProfileHeaderTabs from './components/hero';
import QualificationsComponent from './components/qualification';
import AboutComponent from "./componentgits/about";
import SessionsComponent from "./components/session";


export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <main className="min-h-screen bg-white">
      <ProfileCard />
      <div className="mt-[300px]">
        <ProfileHeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="max-w-4xl  px-4 py-8 mt-16">
          {activeTab === "qualifications" && <QualificationsComponent />}
          {activeTab === "about" && < AboutComponent />}
          {activeTab === "sessions" && <SessionsComponent />}
        </div>
      </div>
    </main>
  );
}
