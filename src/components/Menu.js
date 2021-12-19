import React from "react";

import Tempo from "./Tempo";
import TrackSelect from "./TrackSelect";
import Bars from "./Bars";
import DrumsetSelect from "./DrumsetSelect";
import PlayerController from "./PlayerController";
const Menu = () => {
  return (
    <div className="container menu-container">
      <PlayerController></PlayerController>
      <Tempo></Tempo>
      <Bars></Bars>
      <DrumsetSelect></DrumsetSelect>
      <TrackSelect></TrackSelect>
    </div>
  );
};

export default Menu;
