"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FounderNote() {
  const founders = [
    {
      name: "Siva Prasad",
      title: "Co-founder",
      image: "/images/about/siva.png",
      message:
        "Mental health care in India has long been difficult to access due to stigma, lack of awareness, and availability. With Raaha, we have taken a step toward changing this reality. We want to create a future where seeking mental health care is as normal as visiting a doctor for physical health - without fear, hesitation, or judgment.",
      textPosition: "right",
      imagePosition: "left",
    },
    {
      name: "Satyam Patil",
      title: "Co-founder",
      image: "/images/about/satyam.png",
      message:
        "At Raaha, we believe that mental well-being is a fundamental right. Our mission is to build an ecosystem where people can openly discuss and seek help for their mental health without any barriers. The journey has just begun, and together, we can bring about a transformative change.",
      textPosition: "left",
      imagePosition: "right",
    },
  ];

  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16">Note from the Founders</h2>
        <div className="flex items-center gap-12 relative w-full h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={founders[index].image}
              initial={{ x: founders[index].imagePosition === "left" ? -200 : 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: founders[index].imagePosition === "left" ? 200 : -200, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className={`absolute w-1/2 h-full flex items-center justify-center ${
                founders[index].imagePosition === "right" ? "right-0" : "left-0"
              }`}
            >
              <img
                src={founders[index].image}
                alt="Founder"
                className="w-[500px] h-[500px] object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={founders[index].name}
              className={`absolute w-1/2 ${founders[index].textPosition === "right" ? "right-0" : "left-0"}`}
              initial={{ x: founders[index].textPosition === "left" ? -200 : 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: founders[index].textPosition === "left" ? 200 : -200, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-4">{founders[index].name}</h3>
              <p className="text-gray-200 mb-8 text-xl">{founders[index].title}</p>
              <p className="text-gray-100 text-2xl leading-relaxed mt-12">
                "{founders[index].message}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}