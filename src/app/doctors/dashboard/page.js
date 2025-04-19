import NavBar from "../components/navBar";
import ClientList from "../components/clientList";

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full bg-gray-100">
      {/* Left Sidebar */}
      <div className=" bg-white shadow-md">
        <NavBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        <ClientList />
      </div>
    </div>
  );
}
