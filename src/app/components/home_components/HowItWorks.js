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
    <section className="py-20 px-[5%] bg-[#023C3D] text-white">
      <h2 className="text-5xl font-bold text-center mt-20 mb-24">How It Works</h2>
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center p-8 text-2xl"
              style={{
                maxWidth: '400px',
                width: '100%'
              }}
            >
              <div className="w-full flex justify-center relative h-[300px]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain mb-6"
                />
              </div>
              <h3 className="text-3xl mb-4">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;