import React, { useState } from "react";
import useEventListener from "./event-listener";

const activeStyle = {
  backgroundColor: "orange",
  boxShadow: "0 3px orange",
  height: 155,
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
        height: 147,
        marginTop: 13,
        backgroundColor: "grey",
        boxShadow: "0 3px grey",
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
        {keyTrigger}
      </div>
    </div>
  );
};

export default DrumPads;
