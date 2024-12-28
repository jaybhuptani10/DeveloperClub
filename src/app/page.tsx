

import About from "@/components/about";
import HeroSection from "@/components/heroSection";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BoxesCore } from "@/components/ui/background-boxes";
import { body, div } from "framer-motion/client";


export default function Home() {
 
  return (
   <div className="min-h-screen">
      
      <HeroSection/>
      <About/>

   </div>
  );
}
