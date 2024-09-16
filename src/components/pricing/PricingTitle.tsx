import React from "react";

const PricingTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full flex md:items-center justify-between flex-col md:flex-row gap-5">
      <article className="flex flex-col gap-[10px] 2xl:gap-[14px]">
        <h2 className="text-white text-xl md:text-[28px] 2xl:text-4xl font-bold whitespace-nowrap">Size uygun planı seçin</h2>
        <p className="text-grey-60 text-[14px] md:text-base 2xl:text-lg font-light">
          StreamVibe&apos;ye katılın ve görüntüleme tercihlerinize uyacak şekilde uyarlanmış esnek abonelik seçeneklerimiz arasından seçim yapın. Kesintisiz eğlenceye hazır olun!
        </p>
      </article>
      {children}
    </main>
  );
};

export default PricingTitle;
