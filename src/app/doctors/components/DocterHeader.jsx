import Image from 'next/image';
import { ChevronDownIcon } from 'lucide-react';
import logo from '../../../../public/images/logo_green.png';
import profileIcon from '../../../../public/images/profile.png';
import notificationIcon from '../../../../public/images/DoctorDashboard/NotificationIcon.png';

export default function DoctorHeader() {
    return (
        <header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm">
            {/* Logo */}
            <div className="flex items-center">
                <Image
                    src={logo}
                    alt="Raaha Logo"
                    width={120}
                    height={40}
                    className="object-contain"
                />
            </div>

            {/* Right side icons and profile */}
            <div className="flex items-center gap-6">
                {/* Custom Notification Bell Icon */}
                <button className="hover:opacity-80 transition">
                    <Image
                        src={notificationIcon}
                        alt="Notification Bell"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </button>

                {/* Profile section */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                            src={profileIcon}
                            alt="Doctor Profile"
                            width={60}
                            height={60}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="text-sm">
                        <p className="font-semibold text-black">Dr Seetalakshmi</p>
                        <p className="text-gray-500 text-xs">Clinical Psychologist</p>
                    </div>
                    <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                </div>
            </div>
        </header>
    );
}
