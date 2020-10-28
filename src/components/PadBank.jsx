import React from "react";
import DrumPads from "./DrumPads";
// import { bankOne } from "./banks";
// import { bankTwo } from "./banks";

const PadBank = ({ currentPad, power, updateDisplay }) => {
  let padBank;
  if (power) {
    padBank = currentPad.map((drumObj, i, padBankArr) => {
      return (
        <DrumPads
          clip={padBankArr[i].url}
          clipId={padBankArr[i].id}
          keyId={padBankArr[i].keyCode}
          keyTrigger={padBankArr[i].keyTrigger}
          power={power}
          updateDisplay={updateDisplay}
        />
      );
    });
  } else {
    padBank = currentPad.map((drumObj, i, padBankArr) => {
      return (
        <DrumPads
          clip="#"
          clipId={padBankArr[i].id}
          keyId={padBankArr[i].keyCode}
          keyTrigger={padBankArr[i].keyTrigger}
          power={power}
          updateDisplay={updateDisplay}
        />
      );
    });
  }

  return <div className="pad-bank">{padBank}</div>;
};

export default PadBank;
