import NavBar from "../components/navBar"
import ClientList from "../components/clientList"
export default function Dashboard(){
    
    return (

        <div className="flex bg-gray-100 min-h-screen">
            <NavBar />
            <ClientList />

            <h1></h1>

        </div>
    )
}