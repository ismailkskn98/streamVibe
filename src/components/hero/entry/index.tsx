import Button from "@/components/common/Button";
import React from "react";
import { FaPlay } from "react-icons/fa";

const Entry = () => {
  return (
    <main className="row-start-3 row-end-3 w-full h-min flex flex-col items-center gap-12 -mt-3">
      <article className="max-w-[1096px] flex flex-col items-center gap-[10px] xl:gap-[18px]">
        <h2 className="font-bold text-[28px] md:text-[48px] xl:text-[58px] text-white">En İyi Yayın Deneyimi</h2>
        <p className="font-light text-lg text-grey-60 text-center leading-7">
          StreamVibe, favori filmlerinizi ve şovlarınızı istediğiniz zaman, istediğiniz yerde izlemek için en iyi akış deneyimidir.
          <span className="hidden md:block ">
            StreamVibe ile en yeni gişe rekorları kıran filmler, popüler TV şovları ve daha fazlasını içeren çok çeşitli içeriğin keyfini çıkarabilirsiniz.
          </span>
          <span className="hidden lg:block">Ayrıca kendi izleme listelerinizi de oluşturabilirsiniz, böylece izlemek istediğiniz içerikleri kolayca bulabilirsiniz.</span>
        </p>
      </article>
      <Button title="hemen İzlemeye başlayın" url="/" Icon={FaPlay} />
    </main>
  );
};

export default Entry;
