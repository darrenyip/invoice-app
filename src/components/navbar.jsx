import React from "react";
import LogoSVG from "./../assets/logoSVG";
import ThemeSwitch from "./common/themeSwitch";
import NavUser from "./common/navUser";
const Navbar = () => {
  return (
    <nav className="navbar d-flex flex-direction-xxl-col justify-content-between">
      <div className="navbar--logo d-flex-center">
        <LogoSVG width="28" height="26" viewBox="0 0 28 26" />
      </div>
      <div className="navbar--user">
        <ThemeSwitch />
        <NavUser />
      </div>
    </nav>
  );
};

export default Navbar;
