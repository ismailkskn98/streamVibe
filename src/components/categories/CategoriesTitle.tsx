import React from "react";

const CategoriesTitle = () => {
  return (
    <article className="flex flex-col gap-[10px] 2xl:gap-[14px]">
      <h2 className="text-white font-bold text-xl md:text-2xl xl:text-4xl">Geniş kategori çeşitlerimizi keşfedin</h2>
      <p className="text-grey-60 font-light text-sm md:text-base xl:text-lg">
        Sizi güldürecek bir komedi, düşündürecek bir drama veya yeni bir şeyler öğrenmenizi sağlayacak bir belgesel arıyorsanız
      </p>
    </article>
  );
};

export default CategoriesTitle;
