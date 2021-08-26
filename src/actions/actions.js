
//types
export const CHANGE_VOLUME="CHANGE_VOLUME";
export const CHANGE_TEMPO="CHANGE_TEMPO";
export const ADD_NOTE="ADD_NOTE";
export const REMOVE_NOTE="REMOVE_NOTE";
export const EDIT_NOTE="EDIT_NOTE";
export const SELECT_TRACK="SELECT_TRACK";
export const PLAY_TOGGLE="PLAY_TOGGLE";
export const LOAD_TRACK="LOAD_TRACK";
export const TOGGLE_NOTE="TOGGLE_NOTE";

// payload-ładunek -> to co wnosimy nowego do stanu
// type jest obowiązkowy, payload opcjonalny.

//actions 
export const incrementNumber=(value, direction="change")=>{
        
    let updatedValue;

    if(direction==="+"){
        updatedValue=value+1;
    }
    else if(direction==="-"){
        updatedValue=value-1;
    }
    else{
        //change event

    }
    return{
    type:CHANGE_TEMPO,
    payload:{
        updatedValue
    }
}
}

export const trackSelect= (index)=>{

    console.log("Track:", index);
    return {
        type:"SELECT_TRACK",
        payload:{
            index
        }
    }
}

export const play=()=>{
    console.log("start playin motha foka");
    return {
        type:"PLAY_TOGGLE",
        payload:{}
    }
}


export const clear=()=>{
    console.log("clean it up!");
    return {
        type:"CLEAR",
        payload:{}
    }
}

export const loadCustomableTrack=(track, qty)=>{
    
    let updatedTrack=[];

    for (let i = 0; i < qty; i++) {
        updatedTrack.push(track.track);
        
    }
    console.log("customable track loading!");
    return {
        type:"LOAD_TRACK",
        payload:{
            updatedTrack
        }
    }
}
export const updateTrack=(updatedTrack)=>{

    return {
        type:"TOGGLE_NOTE",
        payload:{
            updatedTrack
        }
    }
}