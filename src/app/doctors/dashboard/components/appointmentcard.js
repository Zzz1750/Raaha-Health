'use client';
import Image from 'next/image';
import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export default function AppointmentCard({ appointments }) {
  return (
    <div className={`bg-white p-5 lg:p-6 xl:p-8 rounded-3xl shadow-sm w-full max-w-xl mx-auto ${ibmPlexSans.className}`} style={{ borderRadius: '60px' }}>
      <h3 className={`text-lg lg:text-xl font-semibold text-gray-800 mb-4 ml-5 ${ibmPlexSans.className}`}>Today Client's</h3>
      
      <div className="space-y-4 lg:space-y-5">
        {appointments.map((appointment, index) => (
          <div key={index} className={`flex items-center justify-between px-2 py-1 ${ibmPlexSans.className}`}>
            <div className="flex items-center">
              <div className="rounded-full p-1 mr-3">
                <Image
                  src={appointment.avatar || "/images/default-avatar.png"}
                  alt={appointment.name}
                  width={36}
                  height={36}
                  className="rounded-full w-8 h-8 lg:w-10 lg:h-10"
                />
              </div>
              <div>
                <p className={`font-medium text-sm lg:text-base ${ibmPlexSans.className}`}>{appointment.name}</p>
                <p className={`text-xs lg:text-sm text-gray-500 ${ibmPlexSans.className}`}>{appointment.time}</p>
              </div>
            </div>
            <button className={`text-gray-400 hover:text-gray-700 ml-4 lg:ml-8 xl:ml-12 ${ibmPlexSans.className}`}>
              <Image
                src="/images/DoctorDashboard/menub.png"
                alt="menu button"
                width={12}
                height={12}
                className="w-3 h-3 lg:w-4 lg:h-4"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}