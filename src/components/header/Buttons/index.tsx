import React from "react";
import { GoSearch } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";


const Buttons = () => {
  return (
    <div className="flex items-center gap-8 text-white">
      <GoSearch className="w-7 h-7" />
      <IoNotificationsOutline className="w-7 h-7" />
    </div>
  );
};

export default Buttons;
