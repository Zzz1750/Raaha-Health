'use client'
import { useState } from 'react';
import Image from 'next/image';
import Videocall_Icon_selected from '../../../../../public/images/DoctorDashboard/Video_call_Icon.png'
import Audiocall_Icon_selected from '../../../../../public/images/DoctorDashboard/Audio_call_Icon_Selected.png'
import Videocall_Icon_Unselected from '../../../../../public/images/DoctorDashboard/Video_call_Icon_Unselected.png'
import Audiocall_Icon_Unselected from '../../../../../public/images/DoctorDashboard/Audio_call_Icon.png'
import PinIcon from '../../../../../public/images/DoctorDashboard/Map_droppin_Icon.png'
import MorningIcon from '../../../../../public/images/DoctorDashboard/Morning_Icon.png'
import EveningIcon from '../../../../../public/images/DoctorDashboard/Evening_Icon.png'

export default function AddSession({setActiveTab}) {
    const [selectedSlot, setSelectedSlot] = useState('2:00 - 2:50 PM');
    const [availability, setAvailability] = useState('online');
    const [modeSelected, setModeSelected] = useState('audiocall');
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
                <button onClick={() => {setActiveTab('edit')}} className="text-sm text-[#066FCB] border border-[#066FCB] px-3 py-1 rounded  hover:border-gray-300 cursor-pointer">+ Edit Session</button>
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
                        selectedSlot === slot ? 'bg-[#13A4A0] text-white border-teal-500' : 'hover:border-teal-400 text-[#9699A3] hover:text-teal-400'
                    }`}
                    >
                    <div  className={`w-2 h-2 rounded-3xl border p-2 ${selectedSlot === slot ? 'bg-[#00F0EA]' : 'bg-transparent'}`} />
                    {slot}
                    </button>
                ))}
                </div>
            </div>
            ))}
           
        </div>

        {/* Availability */}

      <div className="flex flex-col mt-10 space-y-4 gap-5 pl-5">
            <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-800">Availability</span>
            </div>

            {/* Mode */}

            <div className="flex items-center justify-around">

                {/* Online */}

                <div className='flex flex-col g-4'>
                    <div>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                            type="radio"
                            name="availability"
                            value="online"
                            checked={availability === 'online'}
                            onChange={() => setAvailability('online')} 
                            className='accent-black' 
                            />
                            <span className="font-semibold text-gray-800">Online</span>
                        </label>
                    </div>
                    <div className="flex gap-10 mt-4">
                        <button onClick={()=>{setModeSelected('videocall')}} className={`flex-1 p-4 border-2 text-center rounded-3xl ${modeSelected === 'videocall' ? 'bg-[#023C3D] border-[#023C3D]' : 'bg-transparent border-[#ABABAB]'}`}>
                            <Image src={modeSelected === 'videocall'? Videocall_Icon_selected : Videocall_Icon_Unselected} alt='Video Call' className='w-full'/>

                        </button>
                        <button onClick={()=>{setModeSelected('audiocall')}} className={`flex-1 p-4 border-2 text-center rounded-3xl ${modeSelected === 'audiocall' ? 'bg-[#023C3D] border-[#023C3D]' : 'bg-transparent border-[#ABABAB]'}`}>
                            <Image src={modeSelected === 'audiocall'? Audiocall_Icon_selected : Audiocall_Icon_Unselected} alt='Audio Call' className='w-full'/>

                        </button>
                    </div>
                </div>

                {/* Offline */}

                <div className='flex flex-col g-4'>
                    <div>
                        <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                type="radio"
                                name="availability"
                                value="offline"
                                checked={availability === 'offline'}
                                onChange={() => setAvailability('offline')}
                                className='accent-black' 
                                />
                                <span className="font-semibold text-gray-800">Offline</span>
                            </label>
                    </div>
                    <div className="mt-4 p-4 border-2 border-[#ABABAB] text-left rounded-3xl">
                        <h4 className="text-[#023C3D] font-semibold ">HSR Clinic</h4>
                        <p className="text-sm text-gray-600">
                            1st floor, below Focus Diagnostic Center, HSR Layout,
                            Bengaluru, Karnataka 560102, India
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                            <Image src={PinIcon} alt='Drop Pin'/>
                            <a href="#" className="text-[#00B2FF] text-sm mt-2 block">View in Google Maps</a>
                        </div>
                    </div> 
                </div>
               
            </div>
        </div>

        {/* Live Session Button */}
        <div className="flex justify-center items-center w-full">
                <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:shadow-xl hover:bg-gray-200 hover:text-teal-500 cursor-pointer">Live Session</button>
        </div>
    </div>
    );
}