'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center max-w-l">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="images/bg.jpg"
          alt="Hero background"
          className="object-cover w-full h-full opacity-90"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-l container mx-auto flex flex-col items-center text-center px-8 md:px-16 lg:px-32">
        <h1 className="text-5xl text-center md:text-6xl font-extrabold mb-4 relative text-white mb-36">
          Join <span className="text-green-400">Raaha</span>
        </h1>
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-12 text-white relative mt-12">
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
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="mr-2">Why</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="mr-2">Choose</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="mr-2">
              <span className="text-green-600">Raaha</span>?
            </motion.span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cards */}
            {['globe', 'clock', 'shield', 'users'].map((icon, index) => (
              <Card key={index} className="bg-[#043C3C] text-white border-none shadow-lg w-full h-[229px] mx-auto sm:max-w-[300px] md:max-w-[541px]">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[24px] md:text-[32px] font-extrabold mb-3 text-green-400 font-inter">Feature Title</h3>
                      <p className="text-[20px] md:text-[24px] font-semibold font-inter">Feature description</p>
                    </div>
                    <div className="p-3 rounded-full">
                      <Image src={`images/${icon}.png`} alt={icon} width={44} height={44} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[34px]">Who Can <span className="text-green-600 text-[34px]">Join</span>?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['psychiatrist', 'clinical', 'counselor'].map((role, index) => (
              <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-4 rounded-full">
                    <Image src={`images/${role}.png`} alt={role} width={100} height={100} className="rounded-full" />
                  </div>
                  <h3 className="text-sm text-gray-500 mb-1">NAME</h3>
                  <p className="text-lg font-semibold mb-4">{role.replace('-', ' ')}</p>
                  <h3 className="text-sm text-gray-500">ELIGIBILITY</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
