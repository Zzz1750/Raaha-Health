'use client';

import React from "react";
import Image from "next/image";

const steps = [
  {
    image: "/images/book-appointment.png",
    title: "Book Appointment",
    description: "Connect with a professional for your needs and book a session"
  },
  {
    image: "/images/attend-session.png",
    title: "Attend A Session",
    description: "Talk with your professional through an in-person or online session"
  },
  {
    image:"/images/stay-in-touch.png" ,
    title: "Stay in Touch",
    description: "Keep taking care by staying in touch with your professional"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-[5%] bg-[#023C3D] text-white mb-10 sm:mb-12 md:mb-16 lg:mb-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-30">How It Works</h2>
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center gap-6 md:gap-4 lg:gap-0">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center p-4 sm:p-5 md:p-6 lg:p-8 text-lg sm:text-xl md:text-xl lg:text-2xl w-full"
              style={{
                maxWidth: '400px'
              }}
            >
              <div className="w-full flex justify-center relative h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain mb-4 md:mb-6"
                />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-3 lg:mb-4">{step.title}</h3>
              <p className="mb-6 sm:mb-7 md:mb-8 lg:mb-10">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;