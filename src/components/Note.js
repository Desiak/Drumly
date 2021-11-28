import React from 'react'
import _ from "lodash";
import {updateTrack} from "../actions/actions";
import { connect } from 'react-redux';

function Note({value, indicator, updateTrack, customableTrack}) {

    const editNote=(e)=>{
        const noteLocation=e.target.id.split("-");
        const barIndex=noteLocation[0];
        const pathIndex= noteLocation[1];
        const noteIndex=noteLocation[2];
       
        let newTrack= _.cloneDeep(customableTrack);
        let modifiedBar=newTrack[barIndex];
        let modifiedPath=[...modifiedBar.value[pathIndex]];
        let modifiedNote=modifiedPath[noteIndex]>=3?0:modifiedPath[noteIndex]+1;

        modifiedPath.splice(noteIndex,1,modifiedNote);
        modifiedBar.value.splice(pathIndex,1,modifiedPath);
        newTrack.splice(barIndex,1, modifiedBar);
        
        // update global state
        updateTrack(newTrack);
    }


    let intensity="";
    switch (value) {
        case 1:
            intensity="ghost-note"
            break;
        case 2:
            intensity="regular"
            break;
        case 3:
            intensity="accent"
            break;
        default:
        
            break;
    }

    return (
        <div 
            className={`note ${intensity}`} 
            onClick={(e)=>editNote(e)} 
            id={indicator}
            key={indicator}
    ></div>
    )
}

const mapStateToProps=store=>({
    customableTrack: store.state.customableTrack,
   
});

const mapDispatchToProps={
    updateTrack,
}
const NoteConsumer = connect(mapStateToProps, mapDispatchToProps)(Note);

export default NoteConsumer;