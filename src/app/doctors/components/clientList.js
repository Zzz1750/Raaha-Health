'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image';
import profilepicdefault from '../../../../public/images/Profile/profile 2.png'
export default function ClientList(){
    console.log("reaching here")
    const Clients = [{date :" 24th March 2020", time: "8:00 - 8:30", clientname: "ash", gender: "male"},
        {date :" 25th March 2020", time: "8:00 - 8:30", clientname: "aswin", gender: "male"},
        {date :" 26th March 2020", time: "8:00 - 8:30", clientname: "zharon", gender: "male"}]
    return(
        <div>
            <div className="relative top-4 bg-emerald-200 rounded-3xl p-5 flex flex-col gap-5">
                    <div className="flex justify-around gap-5">
                        <div>
                            {/* <Image alt="" src={profilepicdefault}/> */}
                            <span className='text-sm'>25th March 2025</span>

                        </div>
                        <div>
                            {/* <Image alt="" src={profilepicdefault}/> */}
                            <span className='text-sm'>08:00 AM -08:30 AM</span>

                        </div>
                    </div>
                    <div>
                        <div className='flex gap-5'>
                            <Image alt="" src={profilepicdefault} width={50} height={15}/>
                            <div className='flex flex-col'>  
                                <span className='font-bold'>Zharon</span>
                                <span>Male</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}