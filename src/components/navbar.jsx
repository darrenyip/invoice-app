import React from "react";
import LogoSVG from "./../assets/logoSVG";
import ThemeSwitch from "./common/themeSwitch";
import NavUser from "./common/navUser";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="App-header">
      <nav className="navbar d-flex flex-direction-xxl-col justify-content-between">
        <Link className="navbar--logo d-flex-center" to="/">
          <LogoSVG width="28" height="26" viewBox="0 0 28 26" />
        </Link>
        <div className="navbar--user">
          <ThemeSwitch />
          <NavUser />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
