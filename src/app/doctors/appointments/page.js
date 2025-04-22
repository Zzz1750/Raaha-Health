import SideBar from "../components/sidebar";
import ClientList from "../components/clientList";
import DoctorHeader from "../components/DocterHeader";
import AppointmentList from "../components/appointmentDetails";
export default function Appointments() {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">

      {/* Header */}
      <DoctorHeader />
      <div className="flex w-full bg-gray-100">
      {/* Left Sidebar */}
      <div className=" bg-white shadow-md">
        <SideBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1  p-6">
        <AppointmentList />
      </div>
      </div>
    </div>
  );
}
