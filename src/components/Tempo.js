import React from "react";
import {connect} from "react-redux";
import { changeTempo } from "../actions/actions";

const Tempo=(props)=>{
    
const handleSpeedChange=(direction)=>{
    if(props.tempo>=170||props.tempo<=40) return;
    props.changeTempo(props.tempo, direction);
}

const handleTempoChange=(e)=>{
    props.changeTempo(e.target.value);
}

    return (
        <div className="input tempo-input">
            <p>TEMPO</p>
            <div class="tempo tempo-info">
            <span className="change-btn" onClick={()=>handleSpeedChange("-")}>-</span>
            <span class="tempo-value"> {props.tempo} bpm</span>
            <span className="change-btn" onClick={()=>handleSpeedChange("+")}>+</span>
            </div>
           <div class="slider-wrapper">
           <input type="range" min="40" value={props.tempo} max="170" step="1" id="tempo-slider" onChange={(e)=>handleTempoChange(e)}/>

           </div>
        </div>
    )
}

const numberFromReduxStore=store=>({
    tempo:store.state.tempo
});

const connectActionsToProps={
    changeTempo: changeTempo,
}

//connect przyjmuje dwa argumenty- state(a dokładnie rozszerzony state(?)) i akcje które będziemy dispaczować
const TempoConsumer= connect(numberFromReduxStore, connectActionsToProps)(Tempo);

export default TempoConsumer;