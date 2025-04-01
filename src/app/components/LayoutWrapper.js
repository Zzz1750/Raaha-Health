"use client"; // This must be a client component
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname(); 

  const staticExcludedRoutes = ["/privacy_policy","/cancellation_policy","/tc","/login","/signup" ,"/session-summary","specialist","/specialist/[id]","/specialist/[id]/[name]"];

   // Define regex patterns for dynamic routes
   const dynamicExcludedRoutes = [/^\/session-summary\/.+$/];

    // Check if pathname matches any static route
  const isExcluded =
  staticExcludedRoutes.includes(pathname) ||
  dynamicExcludedRoutes.some((regex) => regex.test(pathname));

  return (
    <>
      {!isExcluded && <Header />}
      <main className="flex-grow p-6">{children}</main>
      {!isExcluded && <Footer />}
    </>
  );
}
