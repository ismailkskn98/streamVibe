import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const MobilNavigation = () => {
  return (
    <nav className="flex items-center justify-center lg:hidden w-12 h-12 border-4 border-solid border-black-15 bg-black-10 text-white p-3 rounded-xl cursor-pointer">
      <HiMenuAlt3 className="min-w-6 min-h-6" />
    </nav>
  );
};

export default MobilNavigation;
