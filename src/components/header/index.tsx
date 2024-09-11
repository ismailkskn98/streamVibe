import React from "react";
import LogoImage from "./LogoImage";
import NavigationBar from "./NavigationBar";
import Buttons from "./Buttons";
import MobilNavigation from "./MobilNavigation";
const Header = () => {
  return (
    <header className="w-full fluid">
      <main className="grid-container">
        <div className="flex items-center justify-between">
          <LogoImage />
          <NavigationBar />
          <Buttons />
          <MobilNavigation />
        </div>
      </main>
    </header>
  );
};

export default Header;
