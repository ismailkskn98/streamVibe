import React from "react";

const CategoriesTitle = ({ title, description }: { title: string; description?: string }) => {
  return (
    <article className="flex flex-col gap-[10px] 2xl:gap-[14px]">
      <h2 className="text-white font-bold text-xl md:text-2xl xl:text-[38px]">{title}</h2>
      {description && <p className="text-grey-60 font-light text-sm md:text-base xl:text-lg">{description}</p>}
    </article>
  );
};

export default CategoriesTitle;
