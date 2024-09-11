import React from "react";
import NavItem from "./NavItem";

const NavigationBar = () => {
  return (
    <div className="grow hidden lg:flex items-center justify-center">
      <nav className="max-h-[75px] mr-16 xl:mr-36 text-lg flex items-center gap-8 border-4 border-solid border-black-12 bg-black-06 text-grey-75 py-2 px-6 rounded-xl">
        <NavItem href="/" title="Anasayfa" />
        <NavItem href="/filmler-ve-diziler" title="Filmler ve Diziler" />
        <NavItem href="/destek" title="Destek" />
        <NavItem href="/abonelikler" title="Abonelikler" />
      </nav>
    </div>
  );
};

export default NavigationBar;
