import { CHANGE_TEMPO, CHANGE_VOLUME, ADD_NOTE, SELECT_TRACK, PLAY_TOGGLE, LOAD_TRACK, TOGGLE_NOTE, CHANGE_BARS_NUMBER} from "../actions/actions";

const INITIAL_STATE={
    tempo:94,
    length:8,
    // note:1/8,
    numOfBars:4,
    timeSignature:"4/4",
    drumset:"first",
    isPlaying:false,
    tracks:[
        {
            trackName:"test",
            track:[
            [1,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0],
            [0,0,0,1,0,0,0,0],
            [0,0,0,0,1,0,0,0],
            [0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,1,0],
            [0,0,0,0,0,0,0,1],
            ]
        },
        {
        trackName:"example1",
        track:[
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1,0],
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
        [0,0,1,0,0,0,1,0],
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
        case CHANGE_BARS_NUMBER:
            const direction=action.payload.direction;
            return {
                ...state, 
                numOfBars:direction==="+"?state.numOfBars+1:state.numOfBars-1,
                customableTrack:direction==="+"?[...state.customableTrack, state.tracks[state.trackIndex].track]:state.customableTrack.slice(0,-1),
            }    
            break;
        default:

        console.log("co za akcja wariacie");
    }

     return state;

}
export default state;