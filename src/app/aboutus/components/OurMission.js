"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function MissionItem({ 
  title, 
  description, 
  isLeft, 
  index 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { 
        duration: 0.6
      }
    }
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0,
      x: 20
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.6,
        delay: 0.6
      }
    }
  };

  return (
    <div ref={ref} className="flex items-center">
      {isLeft ? (
        <>
          <div className="w-1/2 pr-16 text-right">
            <h3 className="text-3xl font-bold text-primary">{title}</h3>
          </div>
          <div className="w-1/2 flex items-center">
            <div className="w-12 relative">
              <motion.div 
                className="h-0.5 bg-primary absolute inset-0"
                variants={lineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{ transformOrigin: 'left' }}
              />
            </div>
            <motion.p 
              className="text-xl text-gray-600 ml-6"
              variants={descriptionVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {description}
            </motion.p>
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 flex items-center justify-end">
            <motion.p 
              className="text-xl text-gray-600 mr-6 text-right"
              variants={descriptionVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {description}
            </motion.p>
            <div className="w-12 relative">
              <motion.div 
                className="h-0.5 bg-primary absolute inset-0"
                variants={lineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{ transformOrigin: 'right' }}
              />
            </div>
          </div>
          <div className="w-1/2 pl-16">
            <h3 className="text-3xl font-bold text-primary">{title}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default function OurMission() {
  const missionItems = [
    {
      title: "Make it Easy to Find Help",
      description: "Whether it's distance, cost, or stigma, we ensure that people can get help online or in person without hesitation.",
      isLeft: true
    },
    {
      title: "Break Barriers to Access",
      description: "We provide a simple platform where anyone can connect with trusted mental health professionals.",
      isLeft: false
    },
    {
      title: "Connect You with the Right Experts",
      description: "Our network includes psychologists, psychiatrists, and counselors, so you can find the right support for your needs.",
      isLeft: true
    },
    {
      title: "Foster a Mentally Healthier Society",
      description: "By making mental health care accessible and normalizing conversations around it, we aim to build a more supportive and mentally strong India.",
      isLeft: false
    }
  ];

  return (
    <div className="relative bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold text-primary text-center mb-24">
          Our Mission
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-black"
            />

          {/* Circle dots at each mission point */}
       

          {/* Timeline Items */}
          <div className="space-y-32">
            {missionItems.map((item, index) => (
              <MissionItem 
                key={item.title}
                {...item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}