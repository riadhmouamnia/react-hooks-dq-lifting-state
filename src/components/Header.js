import React from "react";
import Menu from "./Menu";

function Header({ darkMode, setDarkMode }) {
  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default Header;
