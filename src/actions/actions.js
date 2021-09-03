
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
export const CHANGE_BARS_NUMBER="CHANGE_BARS_NUMBER";

// payload-ładunek -> to co wnosimy nowego do stanu
// type jest obowiązkowy, payload opcjonalny.

//actions 
export const changeTempo=(value, direction="change")=>{
        
    let updatedValue;
    console.log("value:", value, typeof value);
    if(direction==="+"){
        updatedValue=value+1;
    }
    else if(direction==="-"){
        updatedValue=value-1;
    }
    else{
        //change event
        updatedValue=Number(value)
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
    
    console.log("input ttack", track);
    let updatedTrack=[];

    // for (let i = 0; i < qty; i++) {
    //     updatedTrack.push(track.track);
        
    // }

    track.track.forEach(bar=>{
        console.log("bar", bar);
        updatedTrack.push(bar)
    })
    console.log("customable track loading!", updatedTrack);
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

export const changeNumOfBars=(direction)=>{

    return {
        type:"CHANGE_BARS_NUMBER",
        payload:{
            direction
        }
    }
}