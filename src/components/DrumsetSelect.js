import React from "react";
import { changeDrumset } from "../actions/actions";
import { connect } from "react-redux";

const DrumsetSelect = (props) => {
  return (
    <div className="input drumset-input">
      Drumset:
      <select
        class="drumset-select"
        onChange={(e) => {
          props.changeDrumset(e.target.value);
        }}
      >
        <option class="drumset-option" value="acoustic-1">
          Acoustic 1
        </option>
        <option class="drumset-option" value="acoustic-2">
          Acoustic 2
        </option>
        <option class="drumset-option" value="electro-1">
          Electro
        </option>
      </select>
    </div>
  );
};

const mapStateToProps = (store) => ({
  drumset: store.state.drumset,
});

const mapDispatchToProps = {
  changeDrumset,
};

const DrumsetSelectConsumer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrumsetSelect);

export default DrumsetSelectConsumer;
