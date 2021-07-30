
//types
export const CHANGE_VOLUME="CHANGE_VOLUME";
export const CHANGE_SPEED="CHANGE_SPEED";
export const ADD_NOTE="ADD_NOTE";
export const REMOVE_NOTE="REMOVE_NOTE";
export const EDIT_NOTE="EDIT_NOTE";

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
    type:CHANGE_SPEED,
    payload:{
        updatedValue
    }
}
}