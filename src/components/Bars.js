import React from 'react'
import { connect } from 'react-redux';

const Bars=(props)=> {
    return (
        <div className="input bars-input">
            Number of bars: {props.bars}
            <p>Add new bar:</p>
            <p>Time signature: {props.timeSignature}</p>
            <p>Shortest note length: {props.singleNoteValue}</p>
        </div>
    )
}

const mapStateToProps=store=>({
    bars: store.state.bars,
    timeSignature:store.state.timeSignature,
    singleNoteValue: store.state.note

});

const BarsConsumer = connect(mapStateToProps)(Bars);

export default BarsConsumer;
