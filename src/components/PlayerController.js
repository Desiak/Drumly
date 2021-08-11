import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { play,clear } from "../actions/actions";
const PlayerController=(props)=> {
   
    return (
        <div className="input player-controller-input">
          Player Controller
          <p>{props.isPlaying?`y`:`n`}</p>
          <button onClick={()=>props.play()} className="controller-btn btn-play">Play</button>
          <button className="controller-btn btn-clear">Clear</button>
        </div>
    )
}

const mapStateToProps=store=>({
    isPlaying: store.state.isPlaying,
});

const mapDispatchToProps={
    play,
    clear
}
const PlayerControllerConsumer = connect(mapStateToProps, mapDispatchToProps)(PlayerController);

export default PlayerControllerConsumer;
