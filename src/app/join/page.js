'use client';

import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
    
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/bg.jpg"
            alt="Hero background"
            className="object-cover w-full h-full opacity-90"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>  
        
        {/* Content */}
        <div className="relative z-10 container mx-auto flex flex-col items-center text-center px-4 sm:px-8 md:px-16 lg:px-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-center font-extrabold relative text-white">
            Join <span className="text-green-400">Raaha</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] text-center font-bold mb-6 sm:mb-8 md:mb-12 text-white relative mt-6 sm:mt-8 md:mt-12">
            Become a Part of Our Growing Network
          </h2>
          <p className="font-extralight text-lg sm:text-xl md:text-2xl lg:text-[26px] mb-6 sm:mb-8 text-gray-300 max-w-2xl">
            <span className="text-green-400 font-poppinsw">Raaha Health</span> is inviting mental health professionals to join our platform and help make quality mental healthcare accessible across India.
          </p>
          <button className="bg-white text-[#0a5c4c] hover:bg-green-100 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-lg shadow-md">
            Know More
          </button>
        </div>
      </section>

      {/* Why Choose Raaha */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-20 md:mb-32 text-[#003C3A]">
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
              <span className="text-green-600">Raaha?</span>
            </motion.span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
            {[
              {
                title: "Expand Your Reach",
                description: "Connect with clients across India",
                icon: "/images/globe.png"
              },
              {
                title: "Flexible Consultation Options",
                description: "Offer both online and offline sessions",
                icon: "/images/clock.png"
              },
              {
                title: "Secure & Hassle-Free Management",
                description: "We handle appointment bookings and payments",
                icon: "/images/shield.png"
              },
              {
                title: "Join a Supportive Community",
                description: "Collaborate with other mental health experts",
                icon: "/images/users.png"
              }
            ].map((card, index) => (
              <div
                key={index}
                className="bg-[#043C3C] text-white border-none shadow-lg w-full sm:w-full md:w-[500px] h-auto sm:h-auto md:h-[200px] mx-auto rounded-[12px] flex items-center p-4 sm:p-6"
              >
                <div className="flex-1 pr-2 sm:pr-4">
                  <h1 className={`${inter.className} text-xl sm:text-2xl md:text-[28px] lg:text-[26px] font-extrabold mb-4 sm:mb-6 md:mb-10 text-green-400 leading-tight`}>
                    {card.title}
                  </h1>
                  <p className={`${inter.className} text-base sm:text-lg md:text-[20px] lg:text-[24px] font-semibold text-white leading-snug`}>
                    {card.description}
                  </p>
                </div>
                <div className="p-2 sm:p-3 rounded-full bg-[#043C3C] flex-shrink-0 mb-10 sm:mb-20">
                  <Image 
                    src={card.icon} 
                    alt={card.title} 
                    width={44} 
                    height={44}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12">Who Can <span className="text-green-600">Join?</span></h2>
          <p className="text-center text-[#ABABAB] mb-12 sm:mb-16 md:mb-24 text-lg sm:text-xl md:text-[24px] font-semibold">We welcome licensed and qualified professionals in the following categories:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-9xl mx-auto">
            {[
              {
                title: "Psychiatrist",
                icon: "/images/psychiatrist.png",
                alt: "Psychiatrist icon"
              },
              {
                title: "Clinical Psychologist",
                icon: "/images/clinical.png",
                alt: "Clinical Psychologist icon"
              },
              {
                title: "Counselor",
                icon: "/images/counselor.png",
                alt: "Counselor icon"
              }
            ].map((prof, index) => (
              <div 
                key={index} 
                className="border border-gray-300 rounded-lg hover:shadow-md transition-shadow w-full sm:max-w-[350px] md:max-w-[400px] h-auto sm:h-[220px] md:h-[250px] mx-auto bg-white p-4 sm:p-5"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center">
                    <Image 
                      src={prof.icon} 
                      alt={prof.alt} 
                      width={150} 
                      height={150} 
                      className="rounded-full" 
                    />
                  </div>
                  <div>
                    <h3 className={`${inter.className} text-xs sm:text-sm text-gray-400 font-semibold tracking-wide`}>NAME</h3>
                    <p className={`${inter.className} text-lg sm:text-xl font-bold border-b border-gray-300 pb-1`}>{prof.title}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className={`${inter.className} text-xs sm:text-sm text-gray-400 font-semibold tracking-wide`}>ELIGIBILITY</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-20 md:mb-32">How It <span className="text-green-600">Works</span>?</h2>
          
          {/* tep 1 */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
          >
            <div className="md:col-span-2 order-2 md:order-1">
              <div className="flex items-start">
                <div className="mr-2 sm:mr-4 text-[#13A4A0] font-extrabold text-xl sm:text-2xl md:text-[32px] mt-1 sm:mt-2 md:mt-4">01.</div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-3xl lg:text-[44px] font-bold mb-2 sm:mb-3">Fill Out the Application Form</h3>
                  <p className="text-base sm:text-lg md:text-[20px] text-[#ABABAB] mb-6 sm:mb-8 md:mb-12">
                    Complete the form with the required details. Upload your license 
                    and other relevant documents for verification.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2 mb-4 sm:mb-6 md:mb-8">
              <Image src="/images/form.png" alt="File" width={100} height={100} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            </div>
          </motion.div>

          {/* step 2 */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <div className="flex justify-center md:justify-start">
              <Image src="/images/user.png" alt="File" width={100} height={100} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            </div>
            <div className="md:col-span-2">
              <div className="flex items-start">
                <div className="mr-2 sm:mr-4 text-[#13A4A0] font-extrabold text-xl sm:text-2xl md:text-[32px] mt-1 sm:mt-2 md:mt-4">02.</div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-3xl lg:text-[44px] font-bold mb-2 sm:mb-3">Our Team Will Contact You</h3>
                  <p className="text-base sm:text-lg md:text-[20px] text-[#ABABAB] mb-6 sm:mb-8 md:mb-12">
                    After submitting your application, our team will review your details. If 
                    any additional information is needed, we will reach out to you.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* step 3 */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <div className="md:col-span-2 order-2 md:order-1">
              <div className="flex items-start">
                <div className="mr-2 sm:mr-4 text-[#13A4A0] font-extrabold text-xl sm:text-2xl md:text-[32px] mt-1 sm:mt-2 md:mt-4">03.</div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-3xl lg:text-[44px] font-bold mb-2 sm:mb-3">Document Verification</h3>
                  <p className="text-base sm:text-lg md:text-[20px] text-[#ABABAB] mb-6 sm:mb-8 md:mb-12">
                    We will verify your qualifications, licenses, and experience 
                    to ensure authenticity. This step ensures only trusted 
                    professionals join us.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <Image src="/images/file.png" alt="File" width={100} height={100} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            </div>
          </motion.div>

          {/* step 4 */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <div className="flex justify-center md:justify-start">
              <Image src="/images/mail.png" alt="File" width={100} height={100} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            </div>
            <div className="md:col-span-2">
              <div className="flex items-start">
                <div className="mr-2 sm:mr-4 text-[#13A4A0] font-extrabold text-xl sm:text-2xl md:text-[32px] mt-1 sm:mt-2 md:mt-4">04.</div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-3xl lg:text-[44px] font-bold mb-2 sm:mb-3">Receive Login Information</h3>
                  <p className="text-base sm:text-lg md:text-[20px] text-[#ABABAB] mb-6 sm:mb-8 md:mb-12">
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

      {/* final section */}
      <section className="py-8 sm:py-12 md:py-16 mt-6 sm:mt-8 md:mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Join Us <span className="text-green-600">Today!</span></h2>
          <p className="text-base sm:text-lg text-black-600 font-semibold mb-8 sm:mb-12 max-w-2xl mx-auto mt-6 sm:mt-8 md:mt-12">
            Be a part of Raaha Health and help create a healthier and happier society
          </p>
          <button className="bg-[#2EBE5E] hover:bg-green-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg mb-8 sm:mb-12 rounded font-semibold">
            APPLY NOW
          </button>
        </div>
      </section>
    </main>
  );
}