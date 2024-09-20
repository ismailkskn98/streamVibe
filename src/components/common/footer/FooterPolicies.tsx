import Link from "next/link";
import React from "react";

const FooterPolicies = () => {
  return (
    <main className="w-full flex flex-col items-center gap-6">
      <div className="w-full h-[1px] bg-black-15"></div>
      <article className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <p className="text-grey-60 text-sm">@2024 streamvib, Tüm Hakları Saklıdır</p>
        <div className="flex items-center gap-5">
          <Link href="/" className="text-grey-60 text-sm hover:text-white transition-all">
            Kullanım Şartları
          </Link>
          <Link href="/" className="text-grey-60 text-sm flex items-center gap-5 overflow-hidden hover:text-white transition-all">
            <div className="w-[1px] min-h-5 bg-black-15"></div>
            <span>Gizlilik Politikası</span>
            <div className="w-[1px] min-h-5 bg-black-15"></div>
          </Link>
          <Link href="/" className="text-grey-60 text-sm hover:text-white transition-all">
            Çerez Politikası
          </Link>
        </div>
      </article>
    </main>
  );
};

export default FooterPolicies;
