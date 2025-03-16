"use client"; // This must be a client component
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname(); 

  const excludedRoutes = ["/privacy_policy","/cancellation_policy","/tc","/login","/signup"];
  return (
    <>
      {!excludedRoutes.includes(pathname) && <Header />}
      <main className="flex-grow p-6">{children}</main>
      {!excludedRoutes.includes(pathname) && <Footer />}
    </>
  );
}
