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

  return (
    <div className="controls-container">
      <div className="small-con">
        <div className="inner-control-container">
          <h3>Select Bank</h3>
          <input
            className="tgl tgl-ios-left"
            id="cb4"
            type="checkbox"
            onChange={padChange}
            disabled
          />
          <label className="tgl-btn bankBtn" htmlFor="cb4"></label>
        </div>
      </div>
      {/* trying the new button */}

      <div className="small-con center">
        <div id="display">
          <p>{display}</p>
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
      </div>
      <div className="small-con">
        <div className="inner-control-container">
          <h3>Power</h3>
          <input
            className="tgl tgl-ios"
            id="cb2"
            type="checkbox"
            onClick={powerChange}
          />
          <label className="tgl-btn" htmlFor="cb2"></label>
        </div>
      </div>
    </div>
  );
};

export default Controls;
