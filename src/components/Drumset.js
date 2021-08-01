import React from 'react'
import {connect} from "react-redux";

const Drumset=(props)=> {
    return (
        <div className="container drumset-container">
            <div className="drumset-pad crash">crash (CR)</div>
            <div className="drumset-pad ride">ride (RD)</div>
            <div className="drumset-pad hihat">hihat (HH)</div>
            <div className="drumset-pad snare">snare (SN)</div>
            <div className="drumset-pad tom-1">tom-1 (T-1)</div>
            <div className="drumset-pad tom-2">tom-2 (T-2)</div>
            <div className="drumset-pad floor-tom">floor-tom (F-T)</div>
            <div className="drumset-pad kick">kick (K)</div>
        </div>
    )
}

const mapStateToProps = store=>({
    drumset:store.state.drumset,
})
const DrumsetConsumer= connect(mapStateToProps)(Drumset);

export default DrumsetConsumer;