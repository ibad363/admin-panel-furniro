"use client";
import Image from "next/image";
import React from "react";
import { Menu } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { useUser, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  const sidebarTriggerRef = React.useRef<HTMLButtonElement>(null);

  const handleMenuClick = () => {
    sidebarTriggerRef.current?.click();
  };

  return (
    <div className="w-full fixed top-0 z-50 bg-gray-700 shadow-md">
      <div className="h-16 px-6 flex items-center justify-between">
        {/* Left Side: Logo & Sidebar Menu */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Icon */}
          <Menu
            className="text-white block md:hidden cursor-pointer transition-transform transform hover:scale-110"
            size={30}
            onClick={handleMenuClick}
            aria-label="Open Sidebar"
          />
          <SidebarTrigger ref={sidebarTriggerRef} className="sr-only" />

          {/* Logo */}
          <Image
            src="/assets/main-logo.svg"
            alt="Furniro Logo"
            width={50}
            height={50}
            priority
            className="cursor-pointer transition-all duration-300 hover:scale-105"
          />
          <h1 className="text-[#b88e2f] text-2xl font-bold tracking-wide">
            Furniro
          </h1>
        </div>

        {/* Right Side: User Info & Profile Button */}
        {isLoaded && isSignedIn && user && (
          <div className="flex items-center space-x-4">
            <span className="text-black text-lg font-semibold bg-[#b88e2f] px-3 py-1 rounded-full shadow-sm">
              {String(user.publicMetadata?.role).charAt(0).toUpperCase() + String(user.publicMetadata?.role).slice(1)}
            </span>

            <UserButton afterSwitchSessionUrl="/sign-in" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
