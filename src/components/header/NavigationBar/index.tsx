import React from "react";
import NavItem from "./NavItem";

const NavigationBar = () => {
  return (
    <nav className="flex items-center gap-7 max-h-20 border-4 border-solid border-black-12 bg-black-06 text-grey-75 py-3 px-6 rounded-xl">
      <NavItem href="/" title="Home" />
      <NavItem href="/movies" title="Movies" />
      <NavItem href="/support" title="Support" />
      <NavItem href="/subscriptions" title="Subscriptions" />
    </nav>
  );
};

export default NavigationBar;
