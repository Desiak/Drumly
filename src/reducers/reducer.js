import { CHANGE_SPEED, CHANGE_VOLUME, ADD_NOTE} from "../actions/actions";

const INITIAL_STATE={
    speed:10,
    length:8,
    note:1/8,
    bars:1,
    drumset:"first",
    track:[
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
}

const state= (state=INITIAL_STATE,action)=>{
console.log("speed check")
    switch(action.type){
        case CHANGE_SPEED:
    
        // return [...state, action.payload];
        console.log("INCREMENT: ", action.payload);
        return {...state, speed:action.payload.updatedValue};
        break;
        case CHANGE_VOLUME:

        break;

        case ADD_NOTE:

        break;

        default:

        console.log("co za akcja wariacie");
    }

     return state;

}
export default state;