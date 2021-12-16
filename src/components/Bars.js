import React from 'react'
import { connect } from 'react-redux';

const Bars=({tracks, trackIndex})=> {

    return (
        <div className="input bars-wrapper">
            <p className="bars-label">TRACK INFO</p>
            <span className="bars-info"><span class="track-name">{tracks[trackIndex].trackName}</span></span>
            <span className="bars-info">time: <span class="info-big">{tracks[trackIndex].time}</span></span>
            <span className="bars-info"><span class="info-big">{tracks[trackIndex].measure}</span> notes</span>
        </div>
    )
}

const mapStateToProps=store=>({
    tracks: store.state.tracks,
    trackIndex: store.state.trackIndex,
});


const BarsConsumer = connect(mapStateToProps)(Bars);

export default BarsConsumer;
