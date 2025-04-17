'use client'
import Image from 'next/image'
import profilepicdefault from '../../../../public/images/Profile/profile 2.png'

export default function ClientList() {
  const clients = [
    { date: '25th March 2020', time: '8:00 AM - 8:30 AM', clientname: 'Aswin', gender: 'Male' },
    { date: '26th March 2020', time: '8:00 AM - 8:30 AM', clientname: 'Zharon', gender: 'Male' },
  ]

  return (
    <div className="p-4 space-y-6">
      {clients.map((client, index) => (
        <div
          key={index}
          className="bg-white shadow-md border border-emerald-300 rounded-2xl p-4 transition hover:shadow-lg"
        >
          {/* Header: Date and Time */}
          <div className="flex justify-between items-center mb-4 text-sm text-gray-600 gap-3">
            <span>{client.date}</span>
            <span>{client.time}</span>
          </div>

          {/* Profile Info */}
          <div className="flex items-center gap-4">
            <Image
              alt="Profile Picture"
              src={profilepicdefault}
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">{client.clientname}</p>
              <p className="text-gray-500 text-sm">{client.gender}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
