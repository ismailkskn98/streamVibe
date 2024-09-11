import React from "react";
import { FaPlay } from "react-icons/fa";

const Entry = () => {
  return (
    <section className="w-full flex flex-col items-center gap-11 -mt-3">
      <div className="max-w-[1096px] flex flex-col items-center gap-4">
        <h2 className="font-bold text-6xl text-white">En İyi Yayın Deneyimi</h2>
        <p className="font-light text-lg text-grey-60 leading-relaxed text-center">
          StreamVibe, favori filmlerinizi ve şovlarınızı istediğiniz zaman, istediğiniz yerde izlemek için en iyi akış deneyimidir. StreamVibe ile en yeni gişe rekorları kıran
          filmler, klasik filmler, popüler TV şovları ve daha fazlasını içeren çok çeşitli içeriğin keyfini çıkarabilirsiniz. Ayrıca kendi izleme listelerinizi de
          oluşturabilirsiniz, böylece izlemek istediğiniz içerikleri kolayca bulabilirsiniz.
        </p>
      </div>
      <button className="flex items-center gap-1 px-6 py-[18px] bg-red-45 hover:bg-red-55 transition-all text-white rounded-lg">
        <FaPlay aria-label="Play" />
        <span>Hemen İzlemeye Başlayın</span>
      </button>
    </section>
  );
};

export default Entry;
