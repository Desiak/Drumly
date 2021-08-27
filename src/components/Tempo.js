import React from "react";
import {connect} from "react-redux";
import { changeTempo } from "../actions/actions";

const Tempo=(props)=>{
console.log("props: ", props);

const handleSpeedChange=(direction)=>{
    props.changeTempo(props.numberValue, direction);
}

const handleTempoChange=(e)=>{
    console.log(e.target.value);
    props.changeTempo(e.target.value);
}

    return (
        <div className="input tempo-input">
            <p>Tempo:</p>
            <p class="tempo tempo-info">
            <span className="increment" onClick={()=>handleSpeedChange("-")}>-</span>
            <span class="tempo-value"> {props.numberValue}</span>
            <span className="increment" onClick={()=>handleSpeedChange("+")}>+</span>
            </p>
           <p class="slider-wrapper">
           <input type="range" min="40" value={props.numberValue} max="150" step="1" id="tempo-slider" onChange={(e)=>handleTempoChange(e)}/>

           </p>
        </div>
    )
}

const numberFromReduxStore=store=>({
    numberValue:store.state.tempo
});

const connectActionsToProps={
    changeTempo: changeTempo,
}

//connect przyjmuje dwa argumenty- state(a dokładnie rozszerzony state(?)) i akcje które będziemy dispaczować
const TempoConsumer= connect(numberFromReduxStore, connectActionsToProps)(Tempo);

export default TempoConsumer;