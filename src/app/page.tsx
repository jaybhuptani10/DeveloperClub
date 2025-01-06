

import About from "@/components/about";
import Faqs from "@/components/faqs";
import HeroSection from "@/components/heroSection";
import Parallax from "@/components/parallax";



export default function Home() {
 
  return (
   <div className="min-h-screen bg-[#0F172A]">
      
      <HeroSection/>
      <About/>
      <Parallax/>
      <Faqs/>

   </div>
  );
}
