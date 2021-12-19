import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { loadDrumPads } from "../actions/actions";

const Drumset = (props) => {
  const drumset = useRef(null);

  const playSound = (clickedPad) => {
    const sound = new Audio(`/assets/${props.drumset}/${clickedPad}.mp3`);
    sound.play();
  };

  useEffect(() => {
    const drumPadsArray = Array.prototype.slice.call(
      drumset.current.childNodes
    );
    props.loadDrumPads(drumPadsArray.reverse());
  }, []);
  return (
    <div className="container drumset-container">
      <div className="drumset" ref={drumset}>
        <img
          alt="drum pad"
          onClick={() => playSound("kick")}
          src="./assets/imgs/kick-pad.svg"
          className="drumset-pad drumset-pad--kick"
        ></img>
        <img
          alt="drum pad"
          onClick={() => playSound("floor")}
          src="./assets/imgs/floor-tom-pad.svg"
          className="drumset-pad drumset-pad--floor-tom"
        ></img>
        <img
          alt="drum pad"
          onClick={() => playSound("tom2")}
          src="./assets/imgs/tom-2-pad.svg"
          className="drumset-pad drumset-pad--tom-2"
        ></img>
        <img
          alt="drum pad"
          onClick={() => playSound("tom1")}
          src="./assets/imgs/tom-1-pad.svg"
          className="drumset-pad drumset-pad--tom-1"
        ></img>
        <img
          alt="drum pad"
          onClick={() => playSound("snare")}
          src="./assets/imgs/snare-pad.svg"
          className="drumset-pad drumset-pad--snare"
        ></img>
        <img
          alt="drum pad"
          onClick={() => playSound("hihat")}
          src="./assets/imgs/hihat-pad.svg"
          className="drumset-pad drumset-pad--hihat"
        ></img>
        <img
          alt="drum pad"
          onClick={() => playSound("ride")}
          src="./assets/imgs/ride-pad.svg"
          className="drumset-pad drumset-pad--ride"
        ></img>
        <img
          alt="drum pad"
          onClick={() => playSound("crash")}
          src="./assets/imgs/crash-pad.svg"
          className="drumset-pad drumset-pad--crash"
        ></img>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  drumset: store.state.drumset,
});
const mapDispatchToProps = {
  loadDrumPads,
};
const DrumsetConsumer = connect(mapStateToProps, mapDispatchToProps)(Drumset);

export default DrumsetConsumer;
