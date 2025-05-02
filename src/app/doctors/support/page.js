'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SupportAndHelp() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Custom green color
  const customGreen = '#023c3d';
  const lighterGreen = '#035e5f';

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const faqItems = [
    {
      title: "Billing & Payment",
      content: "Manage your subscription, update payment methods, or view billing history in your account settings."
    },
    {
      title: "Technical Issues",
      content: "For login problems, app crashes, or connectivity issues, try restarting your device first."
    },
    {
      title: "Appointments",
      content: "Reschedule or cancel appointments up to 24 hours in advance through your dashboard."
    },
    {
      title: "Platform Policies",
      content: "Review our terms of service, privacy policy, and community guidelines for platform rules."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f3f6fb' }}>
      <div className="max-w-3xl mx-auto p-6">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Support & Help Center</h1>
          <p className="text-gray-600">Find answers to frequent concerns or contact support</p>
        </div>

        {/* Large Icon Buttons with White Background */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full mb-2 shadow-md">
              <Image 
                src="/images/doctor_support/report_icon.png" 
                alt="Report" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-medium">Report An Issue</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full mb-2 shadow-md">
              <Image 
                src="/images/doctor_support/emergency_icon.png" 
                alt="Emergency" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-medium">Emergency Contact</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-full mb-2 shadow-md">
              <Image 
                src="/images/doctor_support/profile_icon.png" 
                alt="Profile" 
                width={34} 
                height={30}
                className="object-contain"
              />
            </div>
            <span className="font-medium">Profile Updation</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* FAQ Section with Custom Green Dropdowns */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden" style={{ backgroundColor: customGreen }}>
                <button 
                  className={`w-full flex justify-between items-center p-4 text-white`}
                  onClick={() => toggleDropdown(index)}
                  style={{ backgroundColor: activeDropdown === index ? lighterGreen : customGreen }}
                >
                  <span className="font-medium">{item.title}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === index && (
                  <div className="p-4 text-white" style={{ backgroundColor: lighterGreen }}>
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Contact Support Section with Custom Green Background */}
        <div className="rounded-lg p-6" style={{ backgroundColor: customGreen }}>
          <h2 className="text-2xl font-semibold text-white mb-6">Contact Support</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              ></textarea>
            </div>
            <div>
              <label className="inline-flex items-center px-4 py-3 bg-white border border-gray-300 rounded-lg cursor-pointer">
                <span className="text-gray-600">Attach Files</span>
                <input type="file" className="hidden" />
                <svg className="w-5 h-5 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: lighterGreen, color: 'white' }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}