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
    <Avatar className="hidden md:block md:w-16 md:h-16 shadow-md">
      <AvatarImage src="/avatar.jpg" />
      <AvatarFallback>R</AvatarFallback>
    </Avatar>
  );
};

const NavItem = () => {
  const pathname = usePathname();
  return (
    <div className="w-full flex md:flex-col gap-5">
      {navItems.map((item) => (
        <Link href={item.link} key={item.link}>
          <Button
            variant="ghost"
            className={`
              cursor-pointer 
              flex items-center 
              ${
                pathname === item.link
                  ? "text-primary lg:bg-primary lg:text-white lg:hover:bg-primary/90"
                  : ""
              }
              w-12 md:w-full       
              justify-center md:justify-center   
            `}
          >
            <item.icon className="hidden md:block w-4 h-4" />
            <p className="block ml-2">{item.label}</p>
          </Button>
        </Link>
      ))}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="flex justify-center items-start md:m-5">
      <div className="flex justify-between items-center md:flex-col w-full p-5 md:p-0">
        {/* Logo Section */}
        <div>
          <Logo />
        </div>

        {/* User Info Section */}
        <div className="hidden lg:flex flex-col items-center justify-center mt-10">
          <UserAvatar />
          <p className={`${tinos.className} text-lg font-bold mt-5`}>
            Rainier Marasigan
          </p>
          <p className="text-xs font-light">Master Chef</p>
        </div>

        {/* Navigation Items */}
        <div className="mt-0 md:mt-10">
          <NavItem />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
