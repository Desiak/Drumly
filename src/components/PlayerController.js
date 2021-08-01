import React from 'react'
import { connect } from 'react-redux';

const PlayerController=(props)=> {
    return (
        <div className="input player-controller-input">
          Player Controller
          <p>Play</p>
          <p>Pause</p>
          <p>Clear</p>
        </div>
    )
}

const mapStateToProps=store=>({
    isPlaying: store.state.isPlaying,
});

const mapDispatchToProps={
}
const PlayerControllerConsumer = connect(mapStateToProps, mapDispatchToProps)(PlayerController);

export default PlayerControllerConsumer;
