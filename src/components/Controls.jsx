import React from "react";

const Controls = ({
  padChange,
  powerChange,
  volume,
  adjustVolume,
  display,
  power,
  currentPad,
}) => {
  //makes the volume adjuster work
  const clips = [].slice.call(document.getElementsByClassName("clip"));
  clips.forEach((sound) => {
    sound.volume = volume;
  });
  console.log(currentPad);

  return (
    <div className="controls-container">
      <div className="paddChange-btn">
        <h3>Select Bank</h3>
        <input
          onClick={padChange}
          className="tgl tgl-flat"
          id="cb4"
          type="checkbox"
          disabled
        />
        <label className="tgl-btn" htmlFor="cb4"></label>
      </div>
      {/* trying the new button */}
      <div className="power-btn">
        <h3>Power</h3>
        <div className={power ? "greenBulb" : "redBulb"}></div>
        <input
          className="tgl tgl-ios"
          id="cb2"
          type="checkbox"
          onClick={powerChange}
        />
        <label className="tgl-btn" htmlFor="cb2"></label>
      </div>
      <div className="volume-slider">
        <input
          max="1"
          min="0"
          onChange={adjustVolume}
          step="0.01"
          type="range"
          value={volume}
          className="range-slider__range"
        />
      </div>

      <p id="display">Display: {display}</p>
    </div>
  );
};

export default Controls;
