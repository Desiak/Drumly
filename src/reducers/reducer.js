import { CHANGE_TEMPO, CHANGE_VOLUME, ADD_NOTE, SELECT_TRACK, PLAY_TOGGLE, LOAD_TRACK, TOGGLE_NOTE, CHANGE_BARS_NUMBER} from "../actions/actions";

const INITIAL_STATE={
    tempo:94,
    length:8,
    // note:1/8,
    numOfBars:3,
    timeSignature:"4/4",
    drumset:"first",
    isPlaying:false,
    tracks:[
        {
            trackName:"test",
            time:"4/4",
            measure:"8",
            track:[
            [[1,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0],
            [0,0,0,1,0,0,0,0],
            [0,0,0,0,1,0,0,0],
            [0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,1,0],
            [0,0,0,0,0,0,0,1],
        ],
        [   [0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,1,0],
            [0,0,0,0,0,1,0,0],
            [0,0,0,0,1,0,0,0],
            [0,0,0,1,0,0,0,0],
            [0,0,1,0,0,0,0,0],
            [0,1,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0],
        ]
            ]
        },
        {
            trackName:"4/4 8th notes triplets",
            time:"4/4",
            measure:"8/3",
            track:[
            [[0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,1,1,0,1,1,0,1,1,0,1],
            [0,0,0,1,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,1,0,0,0,0,0],]
            ]
        },
        {
            trackName:"3/4 16th notes",
            time:"3/4",
            measure:"16",
            track:[
                [[0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,1,1,1,1,1,1,1,1,1,1],
                [0,0,0,0,1,0,0,0,0,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [1,0,0,0,0,0,0,1,1,0,0,0],]
            ]
        },
        {
        trackName:"4/4 8th notes linear",
        time:"4/4",
        measure:"8",

        track:[
        [[0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,0,0,0,1,0,0,0],]
        ]
    },
    {
        trackName:"4/4 8th notes",
        time:"4/4",
        measure:"8",

        track:[
      [  [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1],
        [0,0,1,0,0,0,1,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,0,0,1,1,0,0,0],]
        ]
    },
    {
        trackName:"4/4 16th notes",
        time:"4/4",
        measure:"16",

        track:[
      [  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0],
        [0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0],]
        ]
    },
    {
        trackName:"3/4 8th notes triplets",
        time:"3/4",
        measure:"8/3",

        track:[
        [[0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,1,1,0,0,1,1,0,1],
        [0,0,0,0,1,0,0,1,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [1,0,0,1,0,0,0,0,0],
        ]]
    },
    {
        trackName:"4/4 8th triplet notes",
        time:"4/4",
        measure:"8/3",

        track:[
        [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [1,0,1,1,0,1,1,0,1,1,0,1],
        [0,1,0,0,1,0,1,1,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,1,0,0,0,1,0,0],    
       ],[
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [1,0,1,1,0,1,1,0,1,1,0,1],
        [0,1,0,0,1,0,1,1,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0,0,0,1],
       ]
        ]
    },
],
    customableTrack:[],
    beatMeasures:[
        {
            time:"4/4",
            measure:"8",
            count:[
                "1","&", 
                "2","&", 
                "3","&", 
                "4", "&"]
        },
        {
            time:"4/4",
            measure:"16",
            count:[
                "1","e","&","a",
                "2","e","&","a", 
                "3","e","&","a", 
                "4","e","&","a",]
        },
        {
            time:"3/4",
            measure:"8/3",
            count:[
                "1", "trip", "let",
                "2", "trip", "let",
                "3", "trip", "let",
            ]
        },
        {
            time:"3/4",
            measure:"16",
            count:[
                "1","e","&","a",
                "2","e","&","a", 
                "3","e","&","a", 
            ]
        },
        {            
            time:"4/4",
            measure:"8/3",
            count:[
                "1", "trip", "let",
                "2", "trip", "let",
                "3", "trip", "let",
                "4", "trip", "let",
            ]
        },
        {
            time:"4/4",
            measure:"16/3",
            count:[
                "1", "trip", "let","&", "trip", "let",
                "2", "trip", "let","&", "trip", "let",
                "3", "trip", "let","&", "trip", "let",
                "4", "trip", "let","&", "trip", "let",
            ]
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
            const newIndex= action.payload.index;

        return {...state, trackIndex:newIndex, numOfBars:state.tracks[newIndex].track.length}
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
                customableTrack:direction==="+"?[...state.customableTrack, state.tracks[state.trackIndex].track[0]]:state.customableTrack.slice(0,-1),
            }    
            break;
        default:

        console.log("co za akcja wariacie");
    }

     return state;

}
export default state;