import React from "react";

const MoviesAndShow = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <section className="relative w-full border border-solid border-black-15">
      <article className="absolute -top-9 left-[50px] w-full">
        <span className="w-min h-min flex items-center gap-1 px-6 py-[14px] 2xl:py-[18px] bg-red-45 text-white rounded-lg">
          <span className="text-sm md:text-lg 2xl:text-lg font-semibold whitespace-nowrap capitalize">{title}</span>
        </span>
      </article>
      <main className="w-full h-full flex flex-col items-start gap-[100px] p-[50px]">{children}</main>
    </section>
  );
};

export default MoviesAndShow;
