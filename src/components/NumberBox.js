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
        <div className="copy-bar box-btn" title="copy this bar" onClick={(e)=>{
            handleBarState(barIndex, "multiply")
        }}><i class="fas fa-plus-square"></i></div>
         <div className="remove-bar box-btn" title="remove this bar" onClick={(e)=>{
            e.stopPropagation();
            handleBarState(barIndex, "remove")
        }}><i class="fas fa-trash-alt"></i>
        </div>
         <div className="clear-bar box-btn" title="clear this bar" onClick={(e)=>{
            handleBarState(barIndex, "clear")
        }}><i class="fas fa-eraser"></i></div>
        <img className="drag-icon" src="./assets/imgs/drag-icon.png"  title="drag to new position" alt="drag icon"></img>
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
