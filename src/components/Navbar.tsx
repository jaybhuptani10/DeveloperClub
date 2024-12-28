'use client'
import React, { useState } from "react";
import { Menu, MenuItem} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
// import { HoverBorderGradient } from "./ui/hover-border-gradient";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    
      return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
          <Menu setActive={setActive} >
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </Link>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Events"></MenuItem>
            </Link>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Team"></MenuItem>
            </Link>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Leaderboard"></MenuItem>
            </Link>
            {/* <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-green-500 bg-white text-black dark:text-white flex items-center space-x-2 px-8 py-2"
      >
        
        <span>Join</span>
      </HoverBorderGradient> */}
            
            
            
            </Menu>
            
            
        </div>
        
      );
}


export default Navbar
