import React from "react";
import NavItem from "./NavItem";

const NavigationBar = () => {
  return (
    <div className="grow flex items-center justify-center">
      <nav className="max-w-[530px] max-h-[75px] mr-40 text-lg flex items-center gap-8 border-4 border-solid border-black-12 bg-black-06 text-grey-75 py-2 px-6 rounded-xl">
        <NavItem href="/" title="Home" />
        <NavItem href="/movies" title="Movies" />
        <NavItem href="/support" title="Support" />
        <NavItem href="/subscriptions" title="Subscriptions" />
    </nav>
    </div>
  );
};

export default NavigationBar;
