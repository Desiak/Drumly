import React from "react";
import {connect} from "react-redux";
import { incrementNumber } from "../actions/actions";

const Tempo=(props)=>{
console.log("props: ", props);

const handleSpeedChange=(direction)=>{
    props.dispatchIncrementNumber(props.numberValue, direction);
}


    return (
        <div className="input tempo-input">
            <p>Tempo:</p>
            <p> {props.numberValue}</p>
            <p className="increment" onClick={()=>handleSpeedChange("+")}>+</p>
            <p className="increment" onClick={()=>handleSpeedChange("-")}>-</p>
        </div>
    )
}

const numberFromReduxStore=store=>({
    numberValue:store.state.speed
});

const connectActionsToProps={
    dispatchIncrementNumber: incrementNumber,
}

//connect przyjmuje dwa argumenty- state(a dokładnie rozszerzony state(?)) i akcje które będziemy dispaczować
const TempoConsumer= connect(numberFromReduxStore, connectActionsToProps)(Tempo);

export default TempoConsumer;