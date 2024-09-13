"use client";
import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Buttons = () => {
  return (
    <article className="bg-black-06 flex items-center p-4 gap-4 rounded-xl">
      <span className="bg-black-10 flex items-center justify-center p-[14px] rounded-lg cursor-pointer group">
        <FiArrowLeft className="text-white w-7 h-7 group-hover:text-grey-60 transition-all duration-300" />
      </span>
      <span>------</span>
      <span className="bg-black-10 flex items-center justify-center p-[14px] rounded-lg cursor-pointer group">
        <FiArrowRight className="text-white w-7 h-7 group-hover:text-grey-60 transition-all duration-300" />
      </span>
    </article>
  );
};

export default Buttons;
