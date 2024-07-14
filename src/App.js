import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Welcome from "./components/Welcome";
import TextForm from "./components/TextForm";
import Time from "./components/Time";
function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const changeStyle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      setBtnText("Enable Light Mode");
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      setBtnText("Enable Dark Mode");
    }
  };
  return (
    <div>
      <Navbar logo="TextFormatter" />
      <Time changeStyle={changeStyle} btnText={btnText} />
      <TextForm heading="Enter the text below to analyze:" />
    </div>
  );
}

export default App;
