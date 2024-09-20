import { useState } from "react";
import Button from "./components/Button/index";
import { ThemeContext } from "./contexts/index";

import "./App.css";
import MySwitch from "./components/MySwitch/index";

export default function App() {
  const [mode, setMode] = useState("light");
  const switchMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const themeSettings = {
    mode,
    switchMode,
  };

  return (
    <ThemeContext.Provider value={themeSettings}>
      <div className={"App-" + mode}>
        <Button />
        <MySwitch />
      </div>
    </ThemeContext.Provider>
  );
}
