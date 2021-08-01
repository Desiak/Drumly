import React from 'react'
import { connect } from 'react-redux';
import { trackSelect } from "../actions/actions";

const TrackSelect=(props)=> {

    const handleOptionSelect=(e)=>{
        const selectedTrackIndex=e.target.options.selectedIndex;
        props.trackSelect(selectedTrackIndex);
    }
    return (
        <div className="input beat-select-input">
            Selected track name: {props.tracks[props.trackIndex].trackName}
            <div className="select-wrapper">
            <select className="select-input" onChange={(e)=>handleOptionSelect(e)}>
                {props.tracks.map((track,index)=><option value={index}>{track.trackName}</option>)}
            </select>
            </div>
            
        </div>
    )
}

const mapStateToProps=store=>({
    tracks: store.state.tracks,
    trackIndex: store.state.trackIndex,
});

//DOBRY PRZYKŁAD
const mapDispatchToProps={
    trackSelect
}

const TrackSelectConsumer = connect(mapStateToProps, mapDispatchToProps)(TrackSelect);

export default TrackSelectConsumer;
