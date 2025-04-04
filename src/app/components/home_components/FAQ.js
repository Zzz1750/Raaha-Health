'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Who are these Professionals?',
    answer: 'Our professionals are licensed and certified mental health experts including psychiatrists, psychologists, and counselors with extensive experience in their respective fields.'
  },
  {
    question: 'How much will it cost me?',
    answer: 'Session costs vary by professional and type of service. We offer various pricing options to ensure accessibility, with sessions typically ranging from $50-$150.'
  },
  {
    question: 'How will the sessions happen?',
    answer: "Sessions can be conducted either online via secure video call or in-person, depending on your preference and the professional's availability."
  },
  {
    question: 'Is there any subscription fees?',
    answer: 'No, there are no mandatory subscription fees. You only pay for the sessions you book.'
  },
  {
    question: 'Is the services available 24/7?',
    answer: 'While our platform is accessible 24/7, session availability depends on individual professional schedules. Emergency services are not provided.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-[3%] md:px-[4%] lg:px-[5%]">
      <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#023C3D] text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 font-medium">
        Frequently Asked Questions
      </h2>
      <div className="faq-list max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white mb-2 sm:mb-3 md:mb-3 lg:mb-4 p-2 sm:p-3 md:p-3 lg:p-4 rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md"
          >
            <div 
              className="flex justify-between items-center font-semibold text-[#023C3D] p-2 cursor-pointer text-xs sm:text-sm md:text-base lg:text-base"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-3 sm:w-4 md:w-4 lg:w-5 h-3 sm:h-4 md:h-4 lg:h-5" />
              ) : (
                <ChevronDown className="w-3 sm:w-4 md:w-4 lg:w-5 h-3 sm:h-4 md:h-4 lg:h-5" />
              )}
            </div>
            {openIndex === index && (
              <p className="p-2 sm:p-2 md:p-3 lg:p-4 text-gray-600 border-t border-gray-200 mt-2 text-xs sm:text-xs md:text-sm lg:text-sm leading-5 md:leading-6">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;