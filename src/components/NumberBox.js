import React from 'react';
import { connect } from 'react-redux';
import {handleBarMod, updateTrack} from "../actions/actions"
import _ from "lodash";


function NumberBox({bar,handleDrag, handleDrop, navToBar, activeBarIndex, barIndex, customableTrack, updateTrack}) {
   

    const clearBarValue=(barValue)=>{
        let emptyBar
        emptyBar=barValue.map(path=>{
           return path.map(note=>0);
        });
        console.log(emptyBar);
        return emptyBar;
    }

    const handleBarState=(ind, action)=>{

        let updatedBarsState= _.cloneDeep(customableTrack);
        switch (action) {
            case "multiply":
                updatedBarsState.splice(ind+1,0,{id: Math.floor(Math.random()*1000),value:_.cloneDeep(updatedBarsState[ind].value)});
                break;
            case "remove":
                updatedBarsState.splice(ind,1);

                break;
            case "clear":
                updatedBarsState[ind].value=clearBarValue(updatedBarsState[ind].value);
                break;
            default:
                break;
        }
        updateTrack(updatedBarsState)
    }
    return (
        <li 
        className={`bar-box ${activeBarIndex===barIndex?"active":""}`} 
        id={bar.id} 
        draggable={true} 
        onDragOver={(ev) => ev.preventDefault()} 
        onDragStart={handleDrag} 
        onDrop={handleDrop}
        onClick={()=>navToBar(bar.order)}
        >
        <p className="number">{bar.id}</p>
        <div className="copy-bar box-btn" onClick={(e)=>{
            handleBarState(barIndex, "multiply")
        }}>+</div>
         <div className="remove-bar box-btn" onClick={(e)=>{
            e.stopPropagation();
            handleBarState(barIndex, "remove")
        }}>-</div>
         <div className="clear-bar box-btn" onClick={(e)=>{
            handleBarState(barIndex, "clear")
        }}>clear</div>
        </li>
    )
}


const mapStateToProps=store=>({
    customableTrack:store.state.customableTrack
});

const mapDispatchToProps={
    handleBarMod,
    updateTrack,
}

const BarsConsumer = connect(mapStateToProps, mapDispatchToProps)(NumberBox);

export default BarsConsumer;
