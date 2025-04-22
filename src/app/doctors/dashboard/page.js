import sideBar from "../components/sidebar";
import ClientList from "../components/clientList";
import DoctorHeader from "../components/DocterHeader";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">

      {/* Header */}
      <DoctorHeader />
      <div className="flex w-full bg-gray-100">
      {/* Left Sidebar */}
      <div className=" bg-white shadow-md">
        <sideBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1  p-6">
        
      </div>
      </div>
    </div>
  );
}
