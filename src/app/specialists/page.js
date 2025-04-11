"use client"
import React , {useState , useEffect} from 'react';
import {TherapistCard} from './components/therapistCard';
import {HeroSection} from './components/heroSection';
import {Filter} from './components/filter';
import { useSelector } from 'react-redux';
import {getAllDoctors} from '../../SERVICE/doctorService'
export default function Home() {

  const [doctors, setDoctors] = useState();
  const token = useSelector((state) => state.auth.accessToken);
  const fetchDoctors = async () => {
    try {
      const response = await getAllDoctors(token);
      setDoctors(response);
      console.log("Doctors fetched successfully:", response);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      
    }
  }
  useEffect(() => {
    if (!doctors) {
      fetchDoctors();
    }
  });
  
  return (
    <div>
      <HeroSection />
      <div className="w-full px-4 sm:px-8 pt-8">
        <Filter />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-10 md:pl-40">
        {doctors?.map((doctor) => (
          <TherapistCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}