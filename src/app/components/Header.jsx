"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Link from 'next/link';
import  ProfileButton  from './ProfileButton'
import { useSelector } from "react-redux"

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
    const [isAuthenticated , setIsAuthenticated ] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const user = useSelector((state) => state.auth.user)
    const checkUser = () =>{
        if (user) {
            setIsAuthenticated(true);
        }
        else{
            setIsAuthenticated(false);
        }
    }
    useEffect(() => {
        checkUser();
        console.log(user)
    });


    return (
        <header className={`${inter.className} bg-[#043C3C] text-white p-1 flex justify-between items-center relative`}>
            <Link href='/'>
                <img 
                    src="/images/raaha_logo.png" 
                    alt="Logo" 
                    draggable="false"
                    className="h-16 w-auto relative bottom-3 left-5 md:h-18"
                    style={{ cursor: 'pointer' }}/>
            </Link>
            

            <nav className="hidden lg:flex text-sm gap-15 lg:text-sm mt-8 mr-5">
                <a href="/specialists" className="hover:text-gray-300">SPECIALISTS</a>
                <a href="/bookSession" className="hover:text-gray-300">BOOK A SESSION</a>
                <a href="/aboutus" className="hover:text-gray-300">ABOUT US</a>
                <a href="/join" className="hover:text-gray-300">JOIN US</a>
                {
                        isAuthenticated ? 
                        (<ProfileButton />)
                        :
                        (<a href="/login" className="text-[#043C3C] bg-[#EDFCE6] px-3 py-1 md:px-4 md:py-2 rounded-lg transform transition-transform duration-200 hover:scale-105 relative -top-2">
                        LOGIN
                        </a>)
                }
            </nav>

            <button className="lg:hidden text-white text-3xl p-2 mr-3" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

            {menuOpen && (
                <div className="absolute top-18 left-0 w-full bg-[#043C3C] text-white flex flex-col items-center gap-4 py-4">
                    <a href="/specialists" className="hover:text-gray-300">SPECIALISTS</a>
                    <a href="/bookSession" className="hover:text-gray-300">BOOK A SESSION</a>
                    <a href="/aboutUs" className="hover:text-gray-300">ABOUT US</a>
                    <a href="/join" className="hover:text-gray-300">JOIN US</a>
                    {
                        isAuthenticated ? 
                        (<ProfileButton />)
                        :
                        (<Link href="/login" className="text-[#043C3C] bg-[#EDFCE6] px-4 py-2 rounded-lg transform transition-transform duration-200 hover:scale-105">LOGIN</Link>)
                    }
                </div>
            )}
        </header>
    );
}
