import React from "react";

const CategoryMobileProgressBar = ({ progress }: { progress: number }) => {
  return (
    <article className="w-full flex items-center justify-center">
      <div className="flex lg:hidden w-1/4 h-1 bg-black-10 overflow-hidden">
        <div className="h-full bg-red-45 transition-all duration-300 ease-out" style={{ width: `${progress * 100}%` }} />
      </div>
    </article>
  );
};

export default CategoryMobileProgressBar;
