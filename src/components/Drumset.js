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
        <div
          alt="drum pad"
          onClick={() => playSound("kick")}
          className="drumset-pad drumset-pad--kick"
        ></div>
        <div
          alt="drum pad"
          onClick={() => playSound("floor")}
          className="drumset-pad drumset-pad--floor-tom"
        ></div>
        <div
          alt="drum pad"
          onClick={() => playSound("tom2")}
          className="drumset-pad drumset-pad--tom-2"
        ></div>
        <div
          alt="drum pad"
          onClick={() => playSound("tom1")}
          className="drumset-pad drumset-pad--tom-1"
        ></div>
        <div
          alt="drum pad"
          onClick={() => playSound("snare")}
          className="drumset-pad drumset-pad--snare"
        ></div>
        <div
          alt="drum pad"
          onClick={() => playSound("hihat")}
          className="drumset-pad drumset-pad--hihat"
        ></div>
        <div
          alt="drum pad"
          onClick={() => playSound("ride")}
          className="drumset-pad drumset-pad--ride"
        ></div>
        <div
          alt="drum pad"
          onClick={() => playSound("crash")}
          className="drumset-pad drumset-pad--crash"
        ></div>
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
