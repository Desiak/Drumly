import React from 'react'
import { connect } from 'react-redux';

const DrumsetSelect=(props)=> {
    return (
        <div className="input drumset-input">
            Drumset: {props.drumset}
        </div>
    )
}

const mapStateToProps=store=>({
    drumset: store.state.drumset
});

const DrumsetSelectConsumer = connect(mapStateToProps)(DrumsetSelect);

export default DrumsetSelectConsumer;
