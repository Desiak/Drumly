import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

const Player=(props)=> {

    // BUTTON który ukrywa drumset i rozciąga player na całą wysokość

    const activeTrack= props.tracks[props.trackIndex];
    const tracksLabels=["CR", "RD", "HH", "SN", "T-1", "T-2", "F-T", "K"];
    const beatMeasures= props.beatMeasures;
    let barLength=props.tracks[props.trackIndex].track[0].length;
    let measureIndex= barLength===8?0:1;
    const beat=activeTrack.track.map((track, index)=>{
        return <div className={`track track-${index}`} >
            {/* <p className="track-label">{tracksLabels[index]}</p> */}
            {track.map(note=>
            <div className={`note ${note===1?"active":""}`}>
            </div>)}
        </div>
    });


    
    const renderBars=(content)=>{
        let barsToRender=[];
        if(content==="beat"){
        for(let i=0;i<props.bars;i++){
            barsToRender.push(<div className={`bar bar-${i}`}>{beat}</div>)
        }
        }else if(content==="measure"){
            for(let i=0;i<props.bars;i++){
                barsToRender.push(<div className={`bar bar--measure bar-${i}`}>{beatMeasures[measureIndex].measure.map(measure=><div className="beat-measure">{measure}</div>)}</div>)
            }
        }
        return barsToRender
    }
   
    return (
        <div className="container player-container">
                            {/* <div className="progress-indicator"></div> */}
        <div className="beat-measure-wrapper wrapper">
            {/* {beatMeasures[0].measure.map(measure=><p className="beat-measure">{measure}</p>)} */}
            {renderBars("measure")}
        </div>
        <div className="tracks-labels-wrapper wrapper">
            {tracksLabels.map(label=><p className="track-label">{label}</p>)}
        </div>
        <div className="beat-wrapper wrapper"> 
        {renderBars("beat")}
        </div>
        
        </div>
    )
}

const mapStateToProps=store=>({
    tracks: store.state.tracks,
    trackIndex: store.state.trackIndex,
    beatMeasures: store.state.beatMeasures,
    bars:store.state.bars,
})
const PlayerConsumer = connect(mapStateToProps)(Player);

export default PlayerConsumer;