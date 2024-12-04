import React from "react";

type ButtonsProps = {
  handleClick: () => void;
  isYearly: boolean;
};

const Buttons = ({ handleClick, isYearly }: ButtonsProps) => {
  return (
    <article className="w-min h-min bg-black-06 text-sm 2xl:text-lg font-medium text-grey-75 flex items-center border border-solid border-black-15 p-2 2xl:p-[10px] rounded-[10px]">
      <button
        onClick={handleClick}
        className={`transition-all hover:text-white px-5 py-3 2xl:px-6 2xl:py-[14px] ${!isYearly ? "text-white bg-black-12 rounded-[10px] whitespace-nowrap" : "bg-transparent"} `}
      >
        Aylık
      </button>
      <button
        onClick={handleClick}
        className={`transition-all hover:text-white px-5 py-3 2xl:px-6 2xl:py-[14px] ${isYearly ? "text-white bg-black-12 rounded-[10px] whitespace-nowrap" : "bg-transparent"} `}
      >
        Yıllık
      </button>
    </article>
  );
};

export default Buttons;
