"use client";

import { Inter } from "next/font/google";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Hero_Cancellation() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.error("Video play error:", error));
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-10 ml-5"> 
      <div className="relative w-[500px] h-[250px]">
        <video 
          ref={videoRef}
          className="w-full h-full object-contain" 
          src="/videos/privacy_bf.mp4"
          loop
          muted
          playsInline
        />

        <h1 className={`${inter.className} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[white] text-4xl font-bold`}>Cancellation Policy</h1>
        <p className={`${inter.className} mt-15 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#043C3C] text-xs font-light`}>Last Updated on 15-12-24</p>
      </div>
      <p className="mt-10"></p>
    </div>
  );
}
