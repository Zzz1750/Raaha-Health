import SideBar from "../components/sidebar";
import ClientList from "../components/clientList";
import DoctorHeader from "../components/DocterHeader";

export default function Clients() {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">

      <div className="flex w-full bg-gray-100">
      {/* Main Content Area */}
      <div className="flex-1  p-6">
        <ClientList />
      </div>
      </div>
    </div>
  );
}
