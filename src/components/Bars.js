import React from 'react'
import { connect } from 'react-redux';
import {changeNumOfBars} from "../actions/actions"

const Bars=(props)=> {
    
    const handleBarsNumerChange=(direction)=>{
        if(props.numOfBars===1 && direction==="-")return;
        props.changeNumOfBars(direction);
    }

    return (
        <div className="input bars-wrapper">
            <p className="bars-label">BARS</p>
            <span className="bars-input">
            <span className="change-btn" onClick={()=>handleBarsNumerChange("-")}>-</span>
            <span className="bars-value">{props.numOfBars}</span>
            <span className="change-btn" onClick={()=>handleBarsNumerChange("+")}>+</span>
            </span>
           

            <span className="bars-info">Time signature: {props.timeSignature}</span>
            <span className="bars-info">Note length: 1/{props.tracks[props.trackIndex].track[0].length}</span>
        </div>
    )
}

const mapStateToProps=store=>({
    numOfBars: store.state.numOfBars,
    timeSignature:store.state.timeSignature,
    tracks: store.state.tracks,
    trackIndex: store.state.trackIndex,
});

const mapDispatchToProps={
    changeNumOfBars,
}

const BarsConsumer = connect(mapStateToProps, mapDispatchToProps)(Bars);

export default BarsConsumer;
