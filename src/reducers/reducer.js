import { CHANGE_TEMPO, CHANGE_VOLUME, ADD_NOTE, SELECT_TRACK, PLAY_TOGGLE, LOAD_TRACK, TOGGLE_NOTE} from "../actions/actions";

const INITIAL_STATE={
    tempo:80,
    length:8,
    // note:1/8,
    numOfBars:4,
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
    },
    {
        trackName:"example3",
        track:[
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0],
        [0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0],
        ]
    }
],
    customableTrack:[],
    beatMeasures:[
        {
            barLength:8,
            measure:[
                "1","&", 
                "2","&", 
                "3","&", 
                "4", "&"]
        },
        {
            barLength:16,
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
        case CHANGE_TEMPO:
    
        // return [...state, action.payload];
        return {...state, tempo:action.payload.updatedValue};
        break;
        case SELECT_TRACK:

        return {...state, trackIndex:action.payload.index}
        break;
        case PLAY_TOGGLE:
        return {...state, isPlaying: !state.isPlaying}
        break;
        case LOAD_TRACK:
        return {...state, customableTrack:action.payload.updatedTrack}    
        break;
        case TOGGLE_NOTE:
        return {...state, customableTrack:action.payload.updatedTrack}    
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