import { Boxes } from "./ui/background-boxes"
import { TypewriterEffect } from "./ui/typewriter-effect"


const heroSection = () => {
  const words = [
    {
      text: "Code, ",
    },
    {
      text: "Create,",
    },
    {
      text: "Conquer – ",
     
    },
    {
      text: "By",
    },
    {
      text: "Coders,",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "For",
    },
    
    {
      text: "Coders!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-[100vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        
        <Boxes/>
        <div className="flex flex-col items-center justify-center h-[40rem] z-20 ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base mb-10  ">
      Challenge your skills, embrace the thrill – where every coder&apos;s journey to victory begins!
      </p>
      <TypewriterEffect className="text-sm" words={words} />
     
    </div>
      
      
    </div>
  )
}

export default heroSection
