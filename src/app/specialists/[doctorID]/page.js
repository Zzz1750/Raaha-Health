"use client"
import { useState , useEffect} from "react";
import ProfileCard from './components/header';
import ProfileHeaderTabs from './components/hero';
import QualificationsComponent from './components/qualification';
import AboutComponent from "./components/about";
import SessionsComponent from "./components/session";
import {getDoctorDetails , getSlotsbyID} from "../../../SERVICE/doctorService"
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const { doctorID } = useParams();
  const [doctorDetails, setDoctorData] = useState();
  const [Slots, setSlot] = useState([]);
  console.log("Slots ID:", Slots);
  const token = useSelector((state) => state.auth.accessToken);

 
  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const responseData = await getDoctorDetails(doctorID, token);
        setDoctorData(responseData);
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };
    const fetchSlots = async () => {
      try {
        const slotResponse = await getSlotsbyID(doctorID, token);
        setSlot(slotResponse);
      } catch (error) {
        console.log(error)
      }
    }
    if (doctorID && token) { // ✅ Ensure both are present before fetching
      fetchDoctorDetails();
      fetchSlots();
    }
  }, [doctorID, token]);


  return (
    <main className="min-h-screen bg-white">
      <ProfileCard doctorDetails= {doctorDetails}/>
      <div className="mt-[300px]">
        <ProfileHeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="max-w-4xl  px-4 py-8 mt-16">
          {activeTab === "qualifications" && <QualificationsComponent doctorDetails= {doctorDetails}/>}
          {activeTab === "about" && < AboutComponent doctorDetails= {doctorDetails}/>}
          {activeTab === "sessions" && <SessionsComponent doctorDetails= {doctorDetails} Slots= {Slots} />}
        </div>
      </div>
    </main>
  );
}
