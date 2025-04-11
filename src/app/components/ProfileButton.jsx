'use client'

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/slices/authSlice";
import Image from "next/image";
import DefaultProfilePic from "../../../public/images/Profile/profile 2.png"
export default function ProfileButton(){
    const [user , setUser] = useState("");
    const [dropdown , setDropdown] = useState(false)
    const checkUser = useSelector((state) => state.auth.user)
    const dispatch = useDispatch();
    useEffect(() => {
        setUser (checkUser)
    })

    const signoutHandle = async()=> {
        try {
            const response = await fetch('http://localhost:5000/Auth/logout',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })
            if (!response.ok) {
                throw new Error(`Logout failed: ${response.statusText}`);
            }
            dispatch(logout())
            const data = await response.json();
            console.log("Logout successful", data);

            window.location.href = "/";
        } catch (error) {
            console.log(error)
        }
    }
    return <div className="flex gap-5 ">
        <div className="border-l border-gray-300 h-full pl-4"></div>
            <button className="text-white bg-transparent hover:text-gray-300    font-medium rounded-lg text-sm  text-center inline-flex items-center" 
           onClick={() => setDropdown(!dropdown)}>
                {user.name}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
        </button>
        <div><Image width={20} height={15} src={DefaultProfilePic} alt="" /></div>
    {/* Drop Down */}
{   dropdown &&
            <div className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 translate-y-10 z-1">
                <ul>
                    <li>
                        <a href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                </ul>
                <div className="py-2">
                    <button onClick={()=> {signoutHandle()}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-red">Sign out</button>
                </div>
            </div>}
    </div>
}