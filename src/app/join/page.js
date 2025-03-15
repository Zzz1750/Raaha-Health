"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
    

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center max-w-l">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/bg.jpg"
          alt="Hero background"
          className="object-cover w-full h-full opacity-90"
        />
      </div>
      
      {/* Overlay */}
     
      
      {/* Content */}
      <div className="relative z-10  max-w-l container mx-auto flex flex-col items-center text-center px-8 md:px-16 lg:px-32">
        <h1 className="text-5xl text-center md:text-6xl font-extrabold mb-4 relative text-white mb-36">
          Join <span className="text-green-400">Raaha</span>
        </h1>
        <h2 className="text-3xl  text-center md:text-4xl font-bold mb-12 text-white relative mt-12">
          Become a Part of Our Growing Network
        </h2>
        <p className="text-lg font-extralight md:text-xl mb-8 text-gray-300 max-w-2xl inter text-[32px]">
          <span className="text-green-400 font-poppinsw">Raaha Health</span> is inviting mental health professionals to join our platform and help make quality mental healthcare accessible across India.
        </p>
        <button className="bg-white text-[#0a5c4c] hover:bg-green-100 px-6 py-3 text-lg font-semibold rounded-lg shadow-md">
          Know More
        </button>
      </div>
    </section>

      {/* Why Choose Raaha */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-36">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mr-2"
            >
              Why
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mr-2"
            >
              Choose
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mr-2"
            >
              <span className="text-green-600">Raaha</span>?
            </motion.span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-[#043C3C] text-white border-none shadow-lg w-full h-[229px] mx-auto p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[24px] md:text-[32px] font-extrabold mb-3 text-green-400 font-inter">Expand Your Reach</h3>
                  <p className="text-[20px] md:text-[24px] font-semibold font-inter">Connect with clients across India</p>
                </div>
                <div className="p-3 rounded-full">
                  <Image src="/images/globe.png" alt="Globe" width={44} height={44} />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#043C3C] text-white border-none shadow-lg w-full h-[229px] mx-auto p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[24px] md:text-[32px] font-extrabold mb-3 text-green-400 font-inter">Flexible Consultation Options</h3>
                  <p className="text-[20px] md:text-[24px] font-semibold font-inter">Offer both online and offline sessions</p>
                </div>
                <div className="p-3 rounded-full">
                  <Image src="/images/clock.png" alt="Clock" width={44} height={44} />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#043C3C] text-white border-none shadow-lg w-full h-[229px] mx-auto p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[24px] md:text-[32px] font-extrabold mb-3 text-green-400 font-inter">Secure & Hassle-Free Management</h3>
                  <p className="text-[20px] md:text-[24px] font-semibold font-inter">We handle appointment bookings and payments</p>
                </div>
                <div className="p-3 rounded-full">
                  <Image src="/images/shield.png" alt="Shield" width={44} height={44} />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#043C3C] text-white border-none shadow-lg w-full h-[229px] mx-auto p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[24px] md:text-[32px] font-extrabold mb-3 text-green-400 font-inter">Join a Supportive Community</h3>
                  <p className="text-[20px] md:text-[24px] font-semibold font-inter">Collaborate with other mental health experts</p>
                </div>
                <div className="p-3 rounded-full">
                  <Image src="/images/users.png" alt="Users" width={44} height={44} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[34px]">Who Can <span className="text-green-600 text-[34px]">Join</span>?</h2>
          <p className="text-center text-[#ABABAB] mb-24 text-[24px] font-semibold">We welcome licensed and qualified professionals in the following categories:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Professional 1 */}
            <div className="border shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="mb-4  p-4 rounded-full">
                  <Image src="/images/psychiatrist.png" 
                    alt="Psychiatrist" 
                    width={100} 
                    height={100}
                    className="rounded-full" />
                </div>
                <h3 className="text-sm text-gray-500 mb-1 ">NAME</h3>
                <p className="text-lg font-semibold mb-4">Psychiatrist</p>
                <h3 className="text-sm text-gray-500">ELIGIBILITY</h3>
              </div>
            </div>

            {/* Professional 2 */}
            <div className="border shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full">
                  <Image src="/images/clinical.png" 
                    alt="Clinical Psychologist" 
                    width={100} 
                    height={100}
                    className="rounded-full" />
                </div>
                <h3 className="text-sm text-gray-500 mb-1">NAME</h3>
                <p className="text-lg font-semibold mb-4">Clinical Psychologist</p>
                <h3 className="text-sm text-gray-500">ELIGIBILITY</h3>
              </div>
            </div>

            {/* Professional 3 */}
            <div className="border shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="mb-4  p-4 rounded-full">
                  <Image src="/images/counselor.png" 
                    alt="Counselor" 
                    width={100} 
                    height={100}
                    className="rounded-full" />
                </div>
                <h3 className="text-sm text-gray-500 mb-1">NAME</h3>
                <p className="text-lg font-semibold mb-4">Counselor</p>
                <h3 className="text-sm text-gray-500">ELIGIBILITY</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-32">How It <span className="text-green-600">Works</span>?</h2>
          
          {/* Step 1 */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
          >
            <div className="md:col-span-2 order-2 md:order-1">
              <div className="flex items-start">
                <div className="mr-4 text-[#13A4A0] font-semibold text-2xl text-[32px]">01.</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[32px] md:text-[44px]">Fill Out the Application Form</h3>
                  <p className="text-[#ABABAB] text-[20px] mb-12 ">
                    Complete the form with the required details. Upload your license 
                    and other relevant documents for verification.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2 mb-8">
              <Image src="/images/form.png" alt="File" width={100} height={100} />
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <div className="flex justify-center md:justify-start">
              <Image src="/images/user.png" alt="File" width={100} height={100} />
            </div>
            <div className="md:col-span-2">
              <div className="flex items-start">
                <div className="mr-4 text-[#13A4A0] font-semibold text-2xl text-[32px]">02.</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[32px] md:text-[44px]">Our Team Will Contact You</h3>
                  <p className="text-[#ABABAB] text-[20px] mb-12 ">
                    After submitting your application, our team will review your details. If 
                    any additional information is needed, we will reach out to you.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <div className="md:col-span-2 order-2 md:order-1">
              <div className="flex items-start">
                <div className="mr-4 text-[#13A4A0] font-semibold text-2xl text-[32px]">03.</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[32px] md:text-[44px]">Document Verification</h3>
                  <p className="text-[#ABABAB] text-[20px] mb-12 ">
                    We will verify your qualifications, licenses, and experience 
                    to ensure authenticity. This step ensures only trusted 
                    professionals join us.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <Image src="/images/file.png" alt="File" width={100} height={100} />
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <div className="flex justify-center md:justify-start">
              <Image src="/images/mail.png" alt="File" width={100} height={100} />
            </div>
            <div className="md:col-span-2">
              <div className="flex items-start">
                <div className="mr-4 text-[#13A4A0] font-semibold text-2xl text-[32px]">04.</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[32px] md:text-[44px]">Receive Login Information</h3>
                  <p className="text-[#ABABAB] text-[20px] mb-12 ">
                    Once verified, you will receive your unique login credentials to 
                    access Raaha Health. You can then set up your profile, manage 
                    appointments, and start consulting clients.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us <span className="text-green-600">Today!</span></h2>
          <p className="text-lg text-black-600 font-semibold mb-12 max-w-2xl mx-auto mt-12">
            Be a part of Raaha Health and help create a healthier and happier society
          </p>
          <button className="bg-[#2EBE5E] hover:bg-green-700 text-white px-8 py-6 text-lg mb-12">
            APPLY NOW
          </button>
        </div>
      </section>
    </main>
  );
}