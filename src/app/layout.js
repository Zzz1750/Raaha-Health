'use client'
import LayoutWrapper from "./components/LayoutWrapper";
import "./globals.css";
import ReduxProvider from "../store/provider"
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { logout, login } from "../store/slices/authSlice";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
      <ReduxProvider>
        <AuthLoader>
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
        </AuthLoader>
       </ReduxProvider>
      </body>
    </html>
  );
}

function AuthLoader({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useSelector((state) => state.auth);

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
          router.push("/login");
        }
        
      } catch (error) {
        console.error("Failed to refresh access token", error);
        dispatch(logout());
        router.push("/login");
      };
    }
   // ✅ Only refresh token if there's no access token in Redux
   if (!auth.accessToken) {
    refreshAccessToken();
  }
}, [dispatch, auth.accessToken, router]);
return children;
}