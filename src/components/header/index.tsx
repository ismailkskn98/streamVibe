import React from "react";
import styles from "./styles.module.css";
import LogoImage from "./LogoImage";
import NavigationBar from "./NavigationBar";
import Buttons from "./Buttons";

const Header = () => {
  return (
    <header className={`w-full fluid ${styles.header}`}>
      <main className="grid-container">
        <div className="flex items-center justify-between">
          <LogoImage />
          <NavigationBar />
          <Buttons />
        </div>
      </main>
    </header>
  );
};

export default Header;
