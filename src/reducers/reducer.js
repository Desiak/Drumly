import { CHANGE_SPEED, CHANGE_VOLUME, ADD_NOTE, SELECT_TRACK} from "../actions/actions";

const INITIAL_STATE={
    speed:80,
    length:8,
    note:1/8,
    bars:1,
    timeSignature:"4/4",
    drumset:"first",
    isPlaying:false,
    tracks:[{
        trackName:"example1",
        track:[
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,1,0,1,0,1,0,1],
        [0,0,0,1,0,0,1,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,0,0,0,1,0,0,0],
        ]
    },
    {
        trackName:"example2",
        track:[
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1],
        [0,0,1,0,0,1,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,0,0,1,1,0,0,0],
        ]
    }],
    beatMeasures:[
        {
            noteLength:1/8,
            measure:[
                "1","&", 
                "2","&", 
                "3","&", 
                "4", "&"]
        },
        {
            noteLength:1/16,
            measure:[
                "1","e","&","a",
                "2","e","&","a", 
                "3","e","&","a", 
                "4","e","&","a",]
        }
    ],
    trackIndex:0,
}

const state= (state=INITIAL_STATE,action)=>{

    switch(action.type){
        case CHANGE_SPEED:
    
        // return [...state, action.payload];
        return {...state, speed:action.payload.updatedValue};
        break;
        case SELECT_TRACK:

        return {...state, trackIndex:action.payload.index}
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