'use client'
import Image from 'next/image'
import { useState } from 'react';

import Calendar from '../../components/Calendar';
import ManageSession from './manageSession';
import AddSession from './addSession';
import EditSession from './editSession';

export default function AppointmentDetails() {
    const [activeTab, setActiveTab] = useState('add');
    const [selectedSlot, setSelectedSlot] = useState('2:00 - 2:50 PM');
    const [availability, setAvailability] = useState('online');
    const [modeSelected, setModeSelected] = useState('audiocall');
    const [selectedDate, setSelectedDate] = useState(new Date());
    

    return (
        <div className='flex w-full h-full bg-[#F3F6FB]  justify-between '>
        {/* LEFT SECTION */}

            <div className='flex flex-col gap-5 lg:w-2/5 p-4 space-y-6'>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-5">Appointments</h2>

                <div>
                    <Calendar onDateSelect={setSelectedDate}/>
                </div>

                <div className='flex flex-col gap-4 mt-5'>
                    <div className='flex gap-5 align-middle '>
                        <div className='w-5 h-5 rounded-4xl bg-[#023C3D]'></div>
                        <h5 className="text-l font-bold text-gray-800  ">Selected Date</h5>
                    </div>
                    <div className='flex gap-5 align-middle'>
                        <div className='w-5 h-5 rounded-4xl bg-[#1360A4]'></div>
                        <h5 className="text-l font-bold text-gray-800  ">Sessions Live</h5>
                    </div>
                    <div className='flex gap-5 align-middle'>
                        <div className='w-5 h-5 rounded-4xl bg-[#FE1F1F]'></div>
                        <h5 className="text-l font-bold text-gray-800  ">Sessions Not Added</h5>
                    </div>
                </div>

            </div>

        {/* RIGHT SECTION */}

            <div className='flex flex-col gap-5 w-full lg:w-3/5 ml-auto p-4 space-y-6 '>

             {/* Switchs */}

                <div className='flex gap-15 mt-5 justify-center '>
                    <button onClick={()=>{setActiveTab('add')}} className={`text-xl font-semibold  ${activeTab === 'add'? 'text-black' : 'text-[#A0A0A0]'}`}>Add Sessions</button>
                    <div className="w-1 h-7 rounded bg-gray-300" />
                    <button onClick={()=>{setActiveTab('manage')}} className={`text-xl font-semibold  ${activeTab === 'manage'? 'text-black' : 'text-[#A0A0A0]'}`}>Manage Sessions</button>
                </div>

             {/* Session Controller */} 
             {/* {activeTab=== 'add'? (
                <AddSession />)
                : 
                (<ManageSession />)
                } */}
                {activeTab=== 'add' && (<AddSession setActiveTab={setActiveTab}/>)}
                {activeTab=== 'manage' && (<ManageSession />)}
                {activeTab=== 'edit' && (<EditSession />)}

            </div>

        </div>
    )
}