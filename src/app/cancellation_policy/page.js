import Hero_cancellation from "./components/HeroSection";
import Content_cancellation from "./components/content";
import Footer from "../components/Footer";
export const metadata = {
    title:'Cancellation Policies',
  };
  
  export default function CancellationPage() {
    return (
      <div>
        <Hero_cancellation />
        <Content_cancellation />
        <Footer />
      </div>
    );
  }
  