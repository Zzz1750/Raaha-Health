import Hero_tc from "./components/HeroSection";
import Content_tc from "./components/content";
import Footer from "../components/Footer";
export const metadata = {
    title:'Terms & Conditions',
  };
  
  export default function TcPage() {
    return (
      <div>
        <Hero_tc />
        <Content_tc />
        <Footer />
      </div>
    );
  }
  