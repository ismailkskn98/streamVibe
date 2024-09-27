import React from "react";

const CtaTitle = () => {
  return (
    <article className="flex flex-col items-center lg:items-start gap-[10px] 2xl:gap-[14px]">
      <h3 className="text-white font-bold text-2xl 2xl:text-5xl text-center lg:text-start">Bugün ücretsiz denemenizi başlatın!</h3>
      <p className="text-grey-60 font-light text-base 2xl:text-lg text-center lg:text-start">
        Bu, kullanıcıları StreamVibe&apos;ın ücretsiz denemesine kaydolmaya teşvik eden net ve öz bir harekete geçirme çağrısıdır.
      </p>
    </article>
  );
};

export default CtaTitle;
