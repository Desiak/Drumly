import React from 'react'
import {connect} from "react-redux";

const Drumset=(props)=> {
    return (
        <div className="container drumset-container">
            <div className="drumset-pad crash">crash</div>
            <div className="drumset-pad ride">ride</div>
            <div className="drumset-pad hihat">hihat</div>
            <div className="drumset-pad snare">snare</div>
            <div className="drumset-pad tom-1">tom-1</div>
            <div className="drumset-pad tom-2">tom-2</div>
            <div className="drumset-pad floor-tom">floor-tom</div>
            <div className="drumset-pad kick">kick</div>
        </div>
    )
}

const mapStateToProps = store=>({
    drumset:store.state.drumset,
})
const DrumsetConsumer= connect(mapStateToProps)(Drumset);

export default DrumsetConsumer;