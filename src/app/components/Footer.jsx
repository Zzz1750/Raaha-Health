"use client";

import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className={`${inter.className} bg-[#f7f7f7] text-black py-10 px-8 border-t border-t-[gray]`} >
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-20 md:gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-20 md:gap-12">

          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-[#44735b]">Raaha</h2>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook.svg" alt="Facebook" className="w-4 opacity-70 hover:opacity-80" />
              </a>
              <a href="https://www.linkedin.com/company/raaha-health/" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin.svg" alt="LinkedIn" className="w-4 opacity-70 hover:opacity-80" />
              </a>
              <a href="https://www.instagram.com/raahahealth" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram.svg" alt="Instagram" className="w-4 opacity-70 hover:opacity-80" />
              </a>
              <a href="https://x.com/raahahealth" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter.svg" alt="Twitter" className="w-4 opacity-70 hover:opacity-80" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-2 text-[#44735b]">Specialists</h3>
            <ul>
              <li><a href="#" className="text-black text-sm opacity-60 hover:opacity-70">Psychiatrist</a></li>
              <li><a href="#" className="text-black text-sm opacity-60 hover:opacity-70">Clinical Psychologist</a></li>
              <li><a href="#" className="text-black text-sm opacity-60 hover:opacity-70">Counselors</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2 text-[#44735b]">Company</h3>
            <ul>
              <li><a href="#" className="text-black text-sm opacity-60 hover:opacity-70">About Us</a></li>
              <li><a href="#" className="text-black text-sm opacity-60 hover:opacity-70">Support/Help</a></li>
              <li><a href="#" className="text-black text-sm opacity-60 hover:opacity-70">Contact Us</a></li>
              <li><a href="#" className="text-black text-sm opacity-60 hover:opacity-70">Join Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2 text-[#44735b]">Legal</h3>
            <ul>
              <li><a href="/privacy_policy" className="text-black text-sm opacity-60 hover:opacity-70">Privacy Policy</a></li>
              <li><a href="/tc" className="text-black text-sm opacity-60 hover:opacity-70">Terms of Service</a></li>
              <li><a href="/cancellation_policy" className="text-black text-sm opacity-60 hover:opacity-70">Cancellation Policies</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <hr className="border-gray-300 my-10" />
      <p className="text-xs text-gray-500 mt-4 text-center opacity-80">
        <strong>Disclaimer:</strong> Raaha is not designed for handling emergencies, including abuse, severe mental health conditions, suicidal thoughts, or self-harm. Please seek professional help or contact emergency services in such cases. 
        Users must be 18 or older to access Raaha. Those aged 13-18 may use it only with parental or guardian consent. Raaha is not suitable for children under 13.
      </p>
      <p className="text-center text-gray-400 text-xs mt-5">&copy; 2025 Raaha, Inc. All rights reserved. | Raaha, a venture of Aeternis Wellness InnovationsÂ LLP.</p>
    </footer>
  );
}