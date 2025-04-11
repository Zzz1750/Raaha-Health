"use client"; // This must be a client component
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname(); 

<<<<<<< HEAD
  const excludedRoutes = ["/privacy_policy","/cancellation_policy","/tc","/login","/signup","/specialists"];
=======
  const staticExcludedRoutes = ["/privacy_policy","/cancellation_policy","/tc","/login","/signup" ,"/session-summary","specialist","/specialist/[id]","/specialist/[id]/[name]"];

   // Define regex patterns for dynamic routes
   const dynamicExcludedRoutes = [/^\/session-summary\/.+$/,/^\/doctors\/.+$/];

    // Check if pathname matches any static route
  const isExcluded =
  staticExcludedRoutes.includes(pathname) ||
  dynamicExcludedRoutes.some((regex) => regex.test(pathname));

>>>>>>> 24c0496a0bb13b0e755ea8886fa9c5da4d6008fa
  return (
    <>
      {!isExcluded && <Header />}
      <main className="flex-grow p-6">{children}</main>
      {!isExcluded && <Footer />}
    </>
  );
}
