import React, { useState } from "react";
import useEventListener from "./event-listener";

const activeStyle = {
  backgroundColor: "orange",
  boxShadow: "0 3px orange",
  height: 77,
  marginTop: 13,
};

const inactiveStyle = {
  backgroundColor: "grey",
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
}) => {
  const [padStyle, setPadStyle] = useState(inactiveStyle);
  // need to add even listeners

  function handler({ keyCode }) {
    if (power) {
      if (keyCode === keyId) {
        console.log("true");
        playSound();
      }
    }
  }

  useEventListener("keydown", handler);

  // needs to be commented
  const activatePad = () => {
    if (power) {
      if (padStyle.backgroundColor === "orange") {
        setPadStyle(inactiveStyle);
      } else {
        setPadStyle(activeStyle);
        setTimeout(() => setPadStyle(inactiveStyle), 100);
      }
    } else if (padStyle.marginTop === 13) {
      setPadStyle(inactiveStyle);
    } else {
      setPadStyle({
        height: 77,
        marginTop: 13,
        backgroundColor: "grey",
        boxShadow: "0 3px grey",
      });
      setTimeout(() => setPadStyle(inactiveStyle), 100);
    }
  };

  //main function to play sound
  const playSound = () => {
    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    sound.play();
    activatePad();
    updateDisplay(clipId.replace(/-/g, " "));
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
        {keyTrigger}
      </div>
    </div>
  );
};

export default DrumPads;
