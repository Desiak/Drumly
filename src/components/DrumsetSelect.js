import React, {useEffect} from "react";
import { changeDrumset } from "../actions/actions";
import { connect } from "react-redux";

const DrumsetSelect = (props) => {
  const pathSelectors = [
    "crash",
    "ride",
    "hihat",
    "snare",
    "tom1",
    "tom2",
    "floor",
    "kick",
  ];

  useEffect(() => {
   handleDrumsetChange("acoustic-1")
  }, [])

  const handleDrumsetChange = (drumset) => {
    let buffers = [];
    pathSelectors.forEach(async(path,index) => {
      const url = `./assets/${drumset}/${path}.mp3`;
      const buffer=await fetch(url)
        .then((response) => {
          return response.arrayBuffer();
        })
        .then((arrayBuffer) => {
          return props.audioContext.decodeAudioData(arrayBuffer);
        })
        .then((audioBuffer) => {
          return audioBuffer;
        });
        buffers.push({index,buffer});
        if(buffers.length===pathSelectors.length){
         const sortedBuffers=buffers.sort((a,b)=>a.index-b.index).map(buffer=>buffer.buffer)
         props.changeDrumset(drumset, sortedBuffers);
        }
    });
  };

  return (
    <div className="input drumset-input">
      <span>DRUMSET</span>
      <select
        class="drumset-select"
        onChange={(e) => handleDrumsetChange(e.target.value)}
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
  audioContext: store.state.audioContext,

});

const mapDispatchToProps = {
  changeDrumset,
};

const DrumsetSelectConsumer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrumsetSelect);

export default DrumsetSelectConsumer;
