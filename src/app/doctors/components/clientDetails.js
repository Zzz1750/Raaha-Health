'use client'
import Image from 'next/image'
import profilepicdefault from '../../../../public/images/Profile/profile 2.png'

export default function ClientDetails() {
  return (
    <div className="bg-[#F3F6FB] flex flex-col items-center justify-center  h-full w-full  gap-8">
      <h2 className="text-3xl font-bold text-gray-800 pb-6">Antony Zharon</h2>

      <div className="w-full max-w-lg shadow-md rounded-2xl p-10 transition hover:shadow-lg">
        {/* Profile Section (optional image) */}
        <div className="flex justify-center mb-6">
          <Image src={profilepicdefault} alt="Profile" width={80} height={80} className="rounded-full" />
        </div>

        {/* Info Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Information</h3>
          <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
            <div>
              <p>Age</p>
              <p className="font-bold">18 years</p>
            </div>
            <div>
              <p>Sex</p>
              <p className="font-bold">Male</p>
            </div>
            <div>
              <p>City</p>
              <p className="font-bold">Trivandrum</p>
            </div>
          </div>
        </div>

        {/* Appointment Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Appointment</h3>
          <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
            <div>
              <p>Date</p>
              <p className="font-bold">24th March, 2020</p>
            </div>
            <div>
              <p>Time</p>
              <p className="font-bold">08:00 - 08:50 AM</p>
            </div>
            <div>
              <p>Mode</p>
              <p className="font-bold">Online (video)</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="px-4 py-2 border border-black text-black rounded-md hover:bg-gray-100 transition">
            Re-schedule
          </button>
          <button className="px-4 py-2 border border-[#C70F12] text-[#C70F12] rounded-md hover:bg-red-100 transition">
            Cancel Appointment
          </button>
        </div>
      </div>
    </div>
  )
}
