import React, { useState } from "react";
import "./styles/App.css";
import $ from "jquery";

//import components
import PadBank from "./components/PadBank";
import Controls from "./components/Controls";

//importing the banks and slider
import { bankOne } from "./components/banks";
import { bankTwo } from "./components/banks";
import { rangeSlider } from "./components/rangeSlider";

function App() {
  const [currentPad, setCurrentPad] = useState(bankOne);
  const [power, setPower] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [display, setDisplay] = useState("Power Off");

  //power switch + display set
  const handlePadChange = () => {
    if (power) {
      if (currentPad === bankOne) {
        setCurrentPad(bankTwo);
        setDisplay("Smooth Piano Kit");
      } else {
        setCurrentPad(bankOne);
        setDisplay("Heater Kit");
      }
    }
  };

  const enableSec = () => {
    $("#cb2").prop("disabled", false);
  };

  const handlePowerChange = () => {
    //changes power state
    setPower(!power);
    //activates the range volume slider
    rangeSlider();
    //toggles the padChange button
    if (!$("#cb4").prop("disabled")) {
      $("#cb4").prop("disabled", true);
    } else {
      $("#cb4").prop("disabled", false);
    }

    //changes display text as per power
    if (power) {
      setDisplay("Power Off");
      $("#cb2").prop("disabled", true);
      setTimeout(() => enableSec(), 500);
    } else {
      setDisplay("Power On");
      $("#cb2").prop("disabled", true);
      setTimeout(() => enableSec(), 500);
    }

    // setDisplay(display === power ? "Power On" : "Power Off");

    //clears display in 1 second
    //in future we want to change this to green button
    setTimeout(() => clearDisplay(), 1000);
  };

  const handleVolumeChange = (e) => {
    if (power) {
      //set state to new value
      setVolume(e.target.value);
      // set display to new value
      setDisplay("Volume " + Math.round(e.target.value * 100));
    }
    //clear display after 1 second.
    setTimeout(() => clearDisplay(), 1000);
  };

  //clears display
  const clearDisplay = () => {
    setDisplay("");
  };

  //update display via pad name
  const updateDisplay = (name) => {
    if (power) {
      setDisplay(name);
    }
  };

  return (
    <>
      <div className="inner-container" id="drum-machine">
        <PadBank
          currentPad={currentPad}
          power={power}
          updateDisplay={updateDisplay}
        />
        <Controls
          currentPad={currentPad}
          adjustVolume={handleVolumeChange}
          volume={volume}
          padChange={handlePadChange}
          powerChange={handlePowerChange}
          power={power}
          display={display}
        />
      </div>
      <p className="footer">
        dev by -{" "}
        <a target="blank" href="https://fb.me/mi5ke">
          Mikael G
        </a>
      </p>
      <p className="footer" id="bot">
        <a target="blank" href="https://github.com/GoglichidzeMike/DrumMachine">
          this project on Git
        </a>
      </p>
    </>
  );
}

export default App;
