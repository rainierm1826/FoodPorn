"use client";

import React from "react";
import Logo from "./Logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tinos } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/obj";

const tinos = Tinos({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const UserAvatar = () => {
  return (
    <Avatar className="w-10 h-10 md:w-16 md:h-16 shadow-md">
      <AvatarImage src="/avatar.jpg" />
      <AvatarFallback>R</AvatarFallback>
    </Avatar>
  );
};

const NavItem = () => {
  const pathname = usePathname();
  return (
    <div className="w-full">
      {navItems.map((item) => (
        <Link href={item.link} key={item.link}>
          <Button
            variant="outline"
            className={`
              mb-5 cursor-pointer 
              flex items-center 
              ${
                pathname === item.link
                  ? "bg-primary text-white hover:bg-primary/90 hover:text-white"
                  : ""
              }
              w-12 md:w-full       
              justify-center md:justify-start   
            `}
          >
            <item.icon className="w-4 h-4" />
            <p className="hidden lg:block ml-2">{item.label}</p>
          </Button>
        </Link>
      ))}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="flex justify-center items-center m-5">
      <div className="flex flex-col items-center">
        <Logo />
        <div className="mt-10 flex flex-col items-center justify-center">
          <UserAvatar />
          <p className={`${tinos.className} hidden lg:block text-lg font-bold mt-5`}>
            Rainier Marasigan
          </p>
          <p className={` text-xs font-light hidden lg:block`}>Master Chef</p>
        </div>
        <div className="mt-10 w-full">
          <NavItem />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
