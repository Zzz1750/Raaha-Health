'use client'

import { useState,useEffect } from "react";
import UserLogin from "./components/UserLogin";
import DoctorLogin from "./components/DoctorLogin";

export default function Login(){
    const [LoginMode, setLoginMode] = useState('user'); 
    

    return(
        <div>
            {LoginMode == 'user' ? (<UserLogin changeLoginMode={setLoginMode}/>) : (<DoctorLogin changeLoginMode={setLoginMode}/>)}
        </div>
        // <div className="flex flex-col justify-center items-center gap-20">    
        //     <Log_sign_header />
        //     <div className="flex flex-col justify-center items-center  border-4 border-gray-300 rounded-lg h-96 w-96 align-middle gap-5">
        //         <h1 className="text-2xl">Log In</h1>
        //         <div className="flex flex-col justify-center items-center gap-5">
        //             <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
        //                 <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email " className="pl-10" />
        //             </div>
        //             <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
        //                 <input type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password " className="pl-10" />
        //             </div>
        //         </div>

        //         <a href="/signup" className=" text-blue-400">Create a new account?, Sign UP</a>
        //         <button className="border border-gray-300 shadow rounded-full h-10 w-40 hover:border-4 hover:border-blue-300 hover:-translate-y-1.5">Sign in with Google</button>
        //         <button onClick={handleSubmit} className="bg-green-400 text-white rounded-lg h-10 w-30 disabled:cursor-not-allowed disabled:bg-gray-400" disabled={disableButton} >Submit</button>
        //     </ div>
        // </div>
    )
}