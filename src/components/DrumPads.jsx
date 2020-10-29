import React, { useState } from "react";
import useEventListener from "./event-listener";

const activeStyle = {
  background:
    "radial-gradient( circle 470px at 49.5% 48.5%,  rgba(3,76,153,1) 0%, rgba(0,0,0,1) 95.1% )",
  boxShadow: "0 3px rgba(3,76,153,1)",
  height: 155,
  marginTop: 13,
};

const inactiveStyle = {
  background:
    "radial-gradient( circle 1774px at -20.9% 107%,  rgba(31,43,86,1) 0%, rgba(0,97,167,1) 100.3% )",
  marginTop: 10,
  boxShadow: "3px 3px 5px black",
};

const DrumPads = ({
  updateDisplay,
  clip,
  clipId,
  keyId,
  keyTrigger,
  power,
  key,
}) => {
  const [padStyle, setPadStyle] = useState(inactiveStyle);
  // need to add even listeners

  function handler({ keyCode }) {
    if (keyCode === keyId) {
      playSound();
    }
  }
  useEventListener("keydown", handler);

  // needs to be commented
  const activatePad = () => {
    if (power) {
      if (
        padStyle.background ===
        "radial-gradient( circle 470px at 49.5% 48.5%,  rgba(3,76,153,1) 0%, rgba(0,0,0,1) 95.1% )"
      ) {
        setPadStyle(inactiveStyle);
      } else {
        setPadStyle(activeStyle);
        setTimeout(() => setPadStyle(inactiveStyle), 100);
      }
    } else if (padStyle.marginTop === 13) {
      setPadStyle(inactiveStyle);
    } else {
      setPadStyle({
        height: 150,
        marginTop: 13,
        backgroundColor: "#2c5364",
        boxShadow: "0 3px 2c5364",
      });
      setTimeout(() => setPadStyle(inactiveStyle), 100);
    }
  };

  //main function to play sound
  const playSound = () => {
    if (power) {
      const sound = document.getElementById(keyTrigger);
      sound.currentTime = 0;
      // sound.crossOrigin = "anonymous";
      sound.play();
      activatePad();
      updateDisplay(clipId.replace(/-/g, " "));
    } else {
      activatePad();
      updateDisplay(clipId.replace(/-/g, " "));
    }
  };

  return (
    <div>
      <div
        className="drum-pad"
        id={clipId}
        onClick={playSound}
        style={padStyle}
      >
        <audio className="clip" id={keyTrigger} src={clip} />
        <p id="keyTrigger">{keyTrigger}</p>
      </div>
    </div>
  );
};

export default DrumPads;
