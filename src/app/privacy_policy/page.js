import Hero_privacy from "./components/HeroSection";
import Content_privacy from "./components/content";
import Footer from "../components/Footer";
export const metadata = {
    title:'Privacy Policy',
  };
  
  export default function PrivacyPage() {
    return (
      <div>
        <Hero_privacy />
        <Content_privacy />
        <Footer />
      </div>
    );
  }
  