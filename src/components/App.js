import React, { useState } from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
