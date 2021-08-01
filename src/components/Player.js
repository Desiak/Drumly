import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

const Player=(props)=> {

    const activeTrack= props.tracks[props.trackIndex];
    const tracksLabels=["CR", "RD", "HH", "SN", "T-1", "T-2", "F-T", "K"];
    const beatMeasures= props.beatMeasures;
    const beat=activeTrack.track.map((track, index)=>{
        return <div className={`track track-${index}`} >
            {/* <p className="track-label">{tracksLabels[index]}</p> */}
            {track.map(note=>
            <div className={`note ${note===1?"active":""}`}>
            </div>)}
        </div>
    });


    

   
    return (
        <div className="container player-container">
                            {/* <div className="progress-indicator"></div> */}
        <div className="beat-measure-wrapper wrapper">
            {beatMeasures[0].measure.map(measure=><p className="beat-measure">{measure}</p>)}
        </div>
        <div className="tracks-labels-wrapper wrapper">
            {tracksLabels.map(label=><p className="track-label">{label}</p>)}
        </div>
        <div className="beat-wrapper wrapper">
        {beat}
        </div>
        
        </div>
    )
}

const mapStateToProps=store=>({
    tracks: store.state.tracks,
    trackIndex: store.state.trackIndex,
    beatMeasures: store.state.beatMeasures,
})
const PlayerConsumer = connect(mapStateToProps)(Player);

export default PlayerConsumer;