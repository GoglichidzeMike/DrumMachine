import React, { useState } from "react";
import "./App.css";

//import components
import PadBank from "./components/PadBank";
import Controls from "./components/Controls";

//importing the banks
import { bankOne } from "./components/banks";
import { bankTwo } from "./components/banks";

function App() {
  const [currentPad, setCurrentPad] = useState(bankOne);
  const [power, setPower] = useState("true");
  const [volume, setVolume] = useState(0.3);
  const [display, setDisplay] = useState("Power Off");

  const handlePadChange = () => {
    setCurrentPad(currentPad === bankOne ? bankTwo : bankOne);
  };

  const handlePowerChange = () => {
    setPower(!power);
    setDisplay(display === "Power Off" ? "Power On" : "Power Off");
  };

  const handleVolumeChange = (e) => {
    if (power) {
      setVolume(e.target.value);
      setDisplay("Volume " + Math.round(e.target.value * 100));
    }
    setTimeout(() => clearDisplay(), 1000);
  };

  const clearDisplay = () => {
    setDisplay("Power On");
  };

  return (
    <div className="inner-container" id="drum-machine">
      <PadBank currentPad={currentPad} power={power} />
      <Controls
        adjustVolume={handleVolumeChange}
        volume={volume}
        padChange={handlePadChange}
        powerChange={handlePowerChange}
        power={power}
        display={display}
      />
    </div>
  );
}

export default App;
