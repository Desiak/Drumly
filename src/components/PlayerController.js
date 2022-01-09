import React, { useEffect } from "react";
import { connect } from "react-redux";
import { play, clear } from "../actions/actions";
const PlayerController = (props) => {
  return (
    <div className="input player-controller-input">
      <button
        onClick={() => props.play()}
        className={`controller-btn btn-play ${
          props.isPlaying ? "playing" : null
        }`}
      >
        {props.isPlaying ? "PAUSE" : "PLAY"}
      </button>
    </div>
  );
};

const mapStateToProps = (store) => ({
  isPlaying: store.state.isPlaying,
});

const mapDispatchToProps = {
  play,
  clear,
};
const PlayerControllerConsumer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerController);

export default PlayerControllerConsumer;
