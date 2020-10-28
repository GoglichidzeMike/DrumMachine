import React from "react";

const Controls = ({
  padChange,
  powerChange,
  volume,
  adjustVolume,
  display,
  power,
}) => {
  //makes the volume adjuster work
  const clips = [].slice.call(document.getElementsByClassName("clip"));
  clips.forEach((sound) => {
    sound.volume = volume;
  });

  return (
    <div className="controls-container">
      <div className="control">
        <button className="select" onClick={padChange}>
          PadChangeButton
        </button>
      </div>
      <div className="control">
        <button className="select" onClick={powerChange}>
          Power Button
        </button>
        <div className={power ? "greenBulb" : "redBulb"}></div>
      </div>
      <div className="volume-slider">
        <input
          max="1"
          min="0"
          onChange={adjustVolume}
          step="0.01"
          type="range"
          value={volume}
        />
      </div>

      <p id="display">Display: {display}</p>
    </div>
  );
};

export default Controls;
