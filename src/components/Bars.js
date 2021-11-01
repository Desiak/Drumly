import React from 'react'
import { connect } from 'react-redux';

const Bars=({tracks, trackIndex})=> {

    return (
        <div className="input bars-wrapper">
            <p className="bars-label">BARS INFO</p>
            <span className="bars-info">Time signature: <span class="info-big">{tracks[trackIndex].time}</span></span>
            <span className="bars-info">Note length: <span class="info-big">{tracks[trackIndex].measure}</span></span>
        </div>
    )
}

const mapStateToProps=store=>({
    tracks: store.state.tracks,
    trackIndex: store.state.trackIndex,
});


const BarsConsumer = connect(mapStateToProps)(Bars);

export default BarsConsumer;
