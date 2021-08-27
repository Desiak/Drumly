import React from 'react'
import { connect } from 'react-redux';

const Bars=(props)=> {
    
    return (
        <div className="input bars-input">
            Number of bars: {props.numOfBars}
            <p>Add new bar: +</p>
            <p>Time signature: {props.timeSignature}</p>
            <p>Note length: 1/{props.tracks[props.trackIndex].track[0].length}</p>
        </div>
    )
}

const mapStateToProps=store=>({
    numOfBars: store.state.numOfBars,
    timeSignature:store.state.timeSignature,
    // singleNoteValue: store.state.note,
    tracks: store.state.tracks,
    trackIndex: store.state.trackIndex,

});

const BarsConsumer = connect(mapStateToProps)(Bars);

export default BarsConsumer;
