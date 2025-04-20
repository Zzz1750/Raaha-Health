'use client'
import Image from 'next/image'
import { useState , useEffect} from 'react'

export default function AppointmentDetails() {
    const [activeTab, setActiveTab] = useState('add');
    const [selectedSlot, setSelectedSlot] = useState('2:00 - 2:50 PM');
    const [availability, setAvailability] = useState('online');
    
    const morningSlots = [
        '8:00 - 8:50 AM', '9:00 - 9:50 AM', '10:00 - 10:50 AM', '11:00 - 11:50 AM',
        '12:00 - 12:50 PM', '1:00 - 1:50 PM', '2:00 - 2:50 PM'
      ];
      
      const eveningSlots = [
        '8:00 - 8:50 AM', '9:00 - 9:50 AM', '10:00 - 10:50 AM', '11:00 - 11:50 AM',
        '12:00 - 12:50 PM', '1:00 - 1:50 PM', '2:00 - 2:50 PM'
      ];
    return (
        <div className='flex w-full h-full bg-[#F3F6FB]  justify-between'>
        {/* LEFT SECTION */}

            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-5">Appointments</h2>

                <div>
                </div>

                <div className='flex flex-col gap-4 mt-5'>
                    <h5 className="text-l font-bold text-gray-800  ">Selected Date</h5>
                    <h5 className="text-l font-bold text-gray-800 ">Sessions Live</h5>
                    <h5 className="text-l font-bold text-gray-800 ">Sessions Not Added</h5>
                </div>

            </div>

        {/* RIGHT SECTION */}

            <div className='flex flex-col gap-5'>

             {/* Switchs */}

                <div className='flex gap-15 mt-5'>
                    <button className="text-l font-semibold text-gray-800  ">Add Sessions</button>
                    <div className="w-1 h-7 rounded bg-gray-300" />
                    <button className="text-l font-semibold text-gray-800  ">Manage Sessions</button>
                </div>

             {/* Session Controller */} 

                <div className='flex flex-col'>
                    <div className='flex justify-center items-center bg-[#023C3D]'>
                        <h2 className="text-2xl font-bold text-gray-800 p-5 text-white">9th March, 2025</h2>
                    </div>

                    <div className='flex bg-white gap-5 p-5'>

                    </div>
                </div>

            </div>

        </div>
    )
}