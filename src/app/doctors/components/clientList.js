'use client'
import Image from 'next/image'
import { useState } from 'react'
import profilepicdefault from '../../../../public/images/Profile/profile 2.png'
import ClientDetails from "../components/clientDetails"

export default function ClientList() {
  const [selectedDateRange, setDateRange] = useState("today")
  const clients = [
    { date: '25th March 2020', time: '8:00 AM - 8:30 AM', clientname: 'Aswin', gender: 'Male' },
    { date: '26th March 2020', time: '8:00 AM - 8:30 AM', clientname: 'Zharon', gender: 'Male' },
  ]

  return (
    <div className="flex w-full h-full px-6 gap-8">
    {/* Left: Client List */}
    <div className="w-2/5 p-4 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-5">Client List</h2>
      {clients.map((client, index) => (
        <div
          key={index}
          className="bg-[#DAF1F0] shadow-md border border-white rounded-2xl p-4 transition hover:shadow-lg"
        >
          {/* Header: Date and Time */}
          <div className="flex justify-between items-center mb-4 text-sm text-gray-600 gap-3">
            <span>{client.date}</span>
            <span>{client.time}</span>
          </div>
  
          {/* Profile Info */}
          <div className="flex items-center gap-4">
            <Image
              alt="Profile Picture"
              src={profilepicdefault}
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">{client.clientname}</p>
              <p className="text-gray-500 text-sm">{client.gender}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  
    {/* Right: Client Details Section */}
    <div className="w-3/5  ml-auto">
      <div className="flex justify-end items-center text-lg text-gray-600 gap-5 mt-5 mb-4 pb-5">
        <button
          onClick={() => setDateRange("today")}
          className={`transition hover:text-gray-300 ${selectedDateRange === "today" ? 'text-black' : 'text-[#717171]'}`}
        >
          Today
        </button>
        <button
          onClick={() => setDateRange("tomorrow")}
          className={`transition hover:text-gray-300 ${selectedDateRange === "tomorrow" ? 'text-black' : 'text-[#717171]'}`}
        >
          Tomorrow
        </button>
        <button
          onClick={() => setDateRange("this week")}
          className={`transition hover:text-gray-300 ${selectedDateRange === "this week" ? 'text-black' : 'text-[#717171]'}`}
        >
          This Week
        </button>
      </div>
      <ClientDetails />
    </div>
  </div>
  )
}
