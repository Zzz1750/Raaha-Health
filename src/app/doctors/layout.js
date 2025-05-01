'use client'
import DoctorNavbar from "./components/DocterHeader";
import Sidebar from "./components/sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function DoctorsLayout({ children }) {
    return (
      <DoctorLayout>
        {children}
      </DoctorLayout>
    );
  }

function DoctorLayout({ children }) {
    return (
      <>
        <DoctorNavbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </>
    );
  }


  function AuthLoader({ children }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    const auth = useSelector((state) => state.auth);
  
    const doctorProtectedRoutes = ["/doctors/dashboard", "/doctors/appointments", "/doctors/clientsPage", "/doctors/supportAndHelp", "/doctors/settings"];
    useEffect(()=>{
  
      const refreshAccessToken =async ()=>{
        try {
            const response = await fetch("http://localhost:5000/Auth/refresh-token", {
              method: "POST",
              credentials: "include",  
              headers: {
                  "Content-Type": "application/json",
              }
          })
         
          if (!response.ok) {
            throw new Error("Failed to refresh token");
          }
  
          const data = await response.json();
          console.log(JSON.parse(atob(data.accessToken.split(".")[1])))
          if (data?.accessToken) {
            dispatch(login({accessToken:data.accessToken , user:JSON.parse(atob(data.accessToken.split(".")[1])).user}))
          }
          else{
            dispatch(logout());
            if(doctorProtectedRoutes.includes(pathname)){
              router.push("/login");
            }
           
          }
          
        } catch (error) {
          console.error("Failed to refresh access token", error);
          dispatch(logout());
          if(doctorProtectedRoutes.includes(pathname)){
            router.push("/login");
          }
        };
      }
     // ✅ Only refresh token if there's no access token in Redux
     
     if (!auth.accessToken) {
      refreshAccessToken();
    }
  }, [dispatch, auth.accessToken, router , pathname ,doctorProtectedRoutes]);
  return children;
  }