import React from "react";
import useStore from "./../../services/store";

import SunSVG from "../../assets/sunSVG";
import MoonSVG from "../../assets/moonSVG";

const ThemeSwitch = () => {
  const theme = useStore((state) => state.theme);
  const flipTheme = useStore((state) => state.flipTheme);
  const handleThemeToggleClick = () => {
    if (theme === "dark") {
      flipTheme("light");
    } else {
      flipTheme("dark");
    }
  };
  return (
    <div
      className="navbar--user__theme-toggler"
      onClick={handleThemeToggleClick}
    >
      {theme === "dark" && (
        <SunSVG width="20" height="20" viewBox="0 0 20 20" />
      )}
      {theme === "light" && (
        <MoonSVG width="20" height="20" viewBox="0 0 20 20" />
      )}
    </div>
  );
};

export default ThemeSwitch;
