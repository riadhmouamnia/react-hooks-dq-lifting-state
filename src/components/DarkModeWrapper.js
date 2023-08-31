import React from "react";

function DarkModeWrapper({ darkMode, children }) {
  return (
    <div id="wrapper" className={darkMode ? "dark-mode" : ""}>
      {children}
    </div>
  );
}

export default DarkModeWrapper;
