'use client'
import { useState } from "react";
import { Home, Calendar, Users, Wallet, UsersRound, User, HelpCircle, LogOut } from "lucide-react";

const NAV_ITEMS = [
  { id: "dashboard", icon: Home, label: "Dashboard" },
  { id: "appointment", icon: Calendar, label: "Appointment" },
  { id: "clients", icon: Users, label: "Clients" },
  { id: "earnings", icon: Wallet, label: "Earnings" },
  { id: "community", icon: UsersRound, label: "Community" },
];

const FOOTER_ITEMS = [
  { id: "profile", icon: User, label: "Profile" },
  { id: "support", icon: HelpCircle, label: "Support & Help" },
  { id: "logout", icon: LogOut, label: "Log Out", className: "text-red-500" },
];

export default function NavBar() {
  const [activeItem, setActiveItem] = useState("dashboard"); // Default active item

  return (
    <div className="bg-white rounded-xl p-6 w-64  ">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Menu</h2>

      {/* Top Navigation */}
      <div className="flex flex-col gap-4">
        {NAV_ITEMS.map((item) => (  
          <div
            key={item.id}
            onClick={() => setActiveItem(item.id)} // Set active item on click
            className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition ${
              activeItem === item.id ? "text-primary font-semibold" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <item.icon className={`w-5 h-5 ${activeItem === item.id ? "text-primary" : "text-gray-600"}`} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Separator */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Bottom Navigation */}
      <div className="flex flex-col gap-4">
        {FOOTER_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition ${
              activeItem === item.id ? "text-primary font-semibold" : item.className || "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
