import React from 'react'
import { connect } from 'react-redux'

const Player=(props)=> {
    return (
        <div className="container player-container">
            {props.track.map(track=>{
                console.log(track);
                
                return <div>1</div>
            })}
        </div>
    )
}

const mapStateToProps=store=>({
    track: store.state.track,
})
const PlayerConsumer = connect(mapStateToProps)(Player);

export default PlayerConsumer;