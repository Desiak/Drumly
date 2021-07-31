import React from 'react'
import { connect } from 'react-redux'

const Player=(props)=> {

    const activeTrack= props.tracks[props.trackIndex]
    return (
        <div className="container player-container">
            {activeTrack.track.map((track, index)=>{
                
                return <div className={`track track-${index}`} >
                    {track.map(note=><div className="note">{note}</div>)}
                </div>
            })}
        </div>
    )
}

const mapStateToProps=store=>({
    tracks: store.state.tracks,
    trackIndex: store.state.trackIndex,
})
const PlayerConsumer = connect(mapStateToProps)(Player);

export default PlayerConsumer;