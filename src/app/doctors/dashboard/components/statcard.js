'use client';
import Image from 'next/image';
import { ArrowRight } from 'react-feather';
import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export default function StatCard({ iconSrc, title, value, bgColor, textColor, linkText = "know more" }) {
  return (
    <div 
      className={`${bgColor} rounded-3xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 w-full relative flex flex-col ${ibmPlexSans.className}`}
      style={{ 
        minHeight: '200px', 
        height: '100%',
      
        '@media (min-width: 1024px) and (max-width: 1200px)': {
          minHeight: '140px',
          padding: '16px',
        }
      }}
    >
    
      <div className="flex items-start mb-4 mt-auto pl-6">
       
        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-20 xl:h-20 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0"> {/* Changed mr-3 to mr-4 */}
          <Image 
            src={iconSrc}
            alt={title}
            width={40}
            height={40}
            className="w-6 h-6 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-10 xl:h-10"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 ml-2"> 
          <h1 className={`text-base md:text-lg lg:text-base xl:text-xl ${textColor} font-medium ${ibmPlexSans.className}`}>{title}</h1>
          <p className={`text-xl md:text-2xl lg:text-xl xl:text-3xl ${textColor} font-bold ${ibmPlexSans.className}`}>{value}</p>
        </div>
      </div>

      
      <div className="mb-auto pl-6"> 
        <a 
          href="#" 
          className={`flex items-center gap-1 md:gap-2 lg:gap-1 xl:gap-2 text-sm md:text-base lg:text-sm xl:text-base ${textColor} mt-2 ${ibmPlexSans.className}`}
        >
          {linkText} <ArrowRight size={16} className="md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-6 xl:h-6" />
        </a>
      </div>
    </div>
  );
}