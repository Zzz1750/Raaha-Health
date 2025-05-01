'use client'
import  { useState } from 'react';
import Image from 'next/image';
import MorningIcon from '../../../../../public/images/DoctorDashboard/Morning_Icon.png'
import EveningIcon from '../../../../../public/images/DoctorDashboard/Evening_Icon.png'

export default function ManageSession() {
    const [selectedSlot, setSelectedSlot] = useState(null);

    const morningSlots = [
        '8:00 - 8:50 AM', '9:00 - 9:50 AM', '10:00 - 10:50 AM', '11:00 - 11:50 AM',
        '12:00 - 12:50 PM', '01:00 - 01:50 PM', '02:00 - 02:50 PM', '03:00 - 03:50 PM'
      ];
      
      const eveningSlots = [
        
        '04:00 - 04:50 PM', '05:00 - 05:50 PM', '06:00 - 06:50 PM' , '07:00 - 07:50 PM', '08:00 - 08:50 PM', '09:00 - 09:50 PM'
      ];
    return (
        <div className='flex flex-col '>
                    <div className='flex justify-center items-center bg-[#023C3D] rounded-t-2xl'>
                        <h2 className="text-2xl font-zbold  p-5 text-white">9th March, 2025</h2>
                    </div>

                     {/* Session Time */}
                    <div className=" flex flex-col gap-6 space-y-6 mt-5 p-5 bg-[#F3F6FB]">
                        <div className="flex justify-end items-center">
                            <button className="text-sm text-[#066FCB] border border-[#066FCB] px-3 py-1 rounded  hover:border-gray-300 cursor-pointer">+ Edit Session</button>
                        </div>
                        {['Morning', 'Evening'].map((time, i) => (
                        <div key={i}>
                            <div className="flex items-center mb-2">
                            <Image src={time === 'Morning' ? MorningIcon : EveningIcon} alt='🌤' />
                            <span className="font-semibold text-gray-800"> {time}</span>
                            </div>
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                            {(time === 'Morning' ? morningSlots : eveningSlots).map((slot) => (
                                <button
                                key={slot}
                                onClick={() => setSelectedSlot(slot)}
                                className={`gap-2 border rounded-md px-3 py-2 text-sm cursor-pointer flex justify-center items-center transition-all  ${
                                    selectedSlot === slot ? 'bg-[#A41315] text-white border-[#A41315]' : 'hover:border-[#F00004] text-[#9699A3] hover:text-[#F00004]'
                                }`}
                                >
                                <div  className={`w-2 h-2 rounded-3xl border p-2 ${selectedSlot === slot ? 'bg-[#F00004]' : 'bg-transparent'}`} />
                                {slot}
                                </button>
                            ))}
                            </div>
                        </div>
                        ))}
                        <div className="flex justify-end items-center w-full">
                            <button className="mt-4 bg-[#A41315] text-white px-4 py-2 rounded hover:shadow-xl hover:bg-[#F00004] hover:text-white cursor-pointer">Remove</button>
                        </div>
                    </div>

                   
                </div>
    );
}