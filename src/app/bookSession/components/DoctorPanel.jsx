"use client";
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
});

export default function DoctorPanel({ searchQuery }) {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      qualification: "MD, Cardiology",
      experience: "10 years",
      fee: "$120",
      image: "./images/doctor-placeholder.jpg" 
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      qualification: "MD, Neurology",
      experience: "8 years",
      fee: "$150",
      image: "./images/doctor-placeholder.jpg"
    },
    {
      id: 3,
      name: "Dr. Emily Wilson",
      qualification: "MD, Pediatrics",
      experience: "12 years",
      fee: "$100",
      image: "./images/doctor-placeholder.jpg"
    },
    {
      id: 4,
      name: "Dr. Robert Garcia",
      qualification: "MD, Orthopedics",
      experience: "15 years",
      fee: "$180",
      image: "./images/doctor-placeholder.jpg"
    },
    {
      id: 5,
      name: "Dr. Priya Patel",
      qualification: "MD, Dermatology",
      experience: "7 years",
      fee: "$90",
      image: "./images/doctor-placeholder.jpg"
    }
  ];

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`space-y-4 ${inter.variable} font-sans`}>
      {filteredDoctors.map(doctor => (
        <div key={doctor.id} className="flex flex-col sm:flex-row border border-gray-200 rounded-lg overflow-hidden bg-white relative">
          {/* Doctor Image - responsive sizing */}
          <div className="w-full sm:w-1/4 bg-white flex items-center justify-center p-4 sm:p-2">
            <img 
              src={doctor.image} 
              alt={doctor.name}
              className="h-32 w-32 sm:h-full sm:w-full object-cover rounded-lg sm:rounded-none"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "./images/doctor-placeholder.jpg";
              }}
            />
          </div>

          {/* Doctor Details */}
          <div className="w-full sm:w-3/4 p-4">
            {/* Name and Qualification in header style */}
            <div className="border-b border-gray-100 pb-2 mb-2">
              <h3 className="text-lg font-bold text-[#043c3c]">{doctor.name}</h3>
              <p className="text-sm text-gray-600">{doctor.qualification}</p>
            </div>

            {/* Experience and Fee in a compact row */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-sm text-gray-600">{doctor.experience}</span>
              </div>
              
              <div className="bg-[#043c3c] text-white px-3 py-1 rounded-md text-sm font-medium">
                {doctor.fee}/hr
              </div>
            </div>

            {/* Book Now Button */}
            <button className="w-full sm:w-40 bg-[#0ac217] text-white py-2 text-sm font-semibold rounded-lg hover:bg-[#08a613] transition flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              BOOK NOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}