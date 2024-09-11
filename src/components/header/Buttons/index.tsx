import React from "react";
import { GoSearch } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";

const Buttons = () => {
  return (
    <div className="hidden lg:flex items-center gap-8 text-white ">
      <GoSearch className="w-7 h-7 hover:text-grey-75 transition-all cursor-pointer" />
      <IoNotificationsOutline className="w-7 h-7 hover:text-grey-75 transition-all cursor-pointer" />
    </div>
  );
};

export default Buttons;
