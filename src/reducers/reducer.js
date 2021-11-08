import { CHANGE_TEMPO, LOAD_DRUMPADS, SELECT_TRACK, PLAY_TOGGLE, LOAD_TRACK, UPDATE_TRACK, CHANGE_BARS_NUMBER} from "../actions/actions";

const INITIAL_STATE={
    tempo:94,
    length:8,
    // note:1/8,
    numOfBars:3,
    timeSignature:"4/4",
    drumset:"first",
    drumPads:[],
    isPlaying:false,
    tracks:[
        {
            trackName:"test",
            time:"4/4",
            measure:"8th",
            track:[
            [[2,0,0,0,0,0,0,0],
            [0,2,0,0,0,0,0,0],
            [0,0,3,0,0,0,0,0],
            [0,0,0,3,0,0,0,0],
            [0,0,0,0,2,0,0,0],
            [0,0,0,0,0,2,0,0],
            [0,0,0,0,0,0,2,0],
            [0,0,0,0,0,0,0,3],
        ],
        [   [0,0,0,0,0,0,0,2],
            [0,0,0,0,0,0,2,0],
            [0,0,0,0,0,2,0,0],
            [0,0,0,0,2,0,0,0],
            [0,0,0,2,0,0,0,0],
            [0,0,2,0,0,0,0,0],
            [0,2,0,0,0,0,0,0],
            [2,0,0,0,0,0,0,0],
        ]
            ]
        },
        {
            trackName:"shuffle",
            time:"4/4",
            measure:"8th triplets",
            track:[
            [[0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [2,0,1,2,0,1,2,0,1,2,0,1],
            [0,0,0,2,0,0,0,0,0,2,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [2,0,0,0,0,0,2,0,0,0,0,0],]
            ]
        },
        {
            trackName:"halftime shuffle",
            time:"4/4",
            measure:"8th triplets",
            track:[
            [
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [2,0,1,2,0,1,2,0,1,2,0,1],
            [0,0,0,3,0,0,0,0,3,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [2,0,0,0,0,2,2,0,0,0,0,2],
            ],
            [
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [2,0,1,2,0,1,2,0,1,2,0,1],
            [0,0,0,0,0,0,3,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0],
            [2,0,0,2,0,0,0,0,0,0,0,2],
            ]
            ]
        },
        {
            trackName:"3/4 8th notes",
            time:"3/4",
            measure:"8th",
            track:[
            [[0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,2,0,0,2],
            [0,0,0,2,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [2,0,0,0,0,0],]
            ]
        },
        {
            trackName:"3/4 16th notes",
            time:"3/4",
            measure:"16th",
            track:[
                [[0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [2,2,2,2,2,2,2,2,2,2,2,2],
                [0,0,0,0,2,0,0,0,0,2,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0],
                [2,0,0,0,0,0,0,2,2,0,0,0],]
            ]
        },
        {
        trackName:"linear beat",
        time:"4/4",
        measure:"8th",

        track:[
        [[0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,2,0,2,0,2,0,2],
        [0,0,2,0,0,0,2,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [2,0,0,0,2,0,0,0],]
        ]
    },
    {
        trackName:"rock",
        time:"4/4",
        measure:"8th",

        track:[
      [  [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [2,2,2,2,2,2,2,2],
        [0,0,2,0,0,0,2,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [2,0,0,2,2,0,0,0],]
        ]
    },
    {
        trackName:"linear beat v.2",
        time:"4/4",
        measure:"16th",

        track:[
      [  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,2,0,0,1,2,0,2,0,0,2,0,0,2,0],
        [0,0,0,0,3,0,0,1,0,1,0,0,3,0,0,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,0,2,0,0,0,0,0,0,2,0,0,2,0,0],]
        ]
    },
    {
        trackName:"build up",
        time:"4/4",
        measure:"16th",
        track:[
        [  
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0],
        ],
         [  
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0],
        ],
        [  
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0],
        ],
        [  
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,1,0,2,0,1,0,2,0,1,0,2,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0],
        ],
        [  
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,1,1,2,0,1,1,2,0,1,1,2,0,1,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0],
        ],
        [  
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0],
        ],
        [  
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,1,2,1,2,2,1,2,2,1,1,1,2,1,1,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0],
        ],
        [  
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,1,2,1,2,2,1,2,2,1,2,2,3,3,3,3],
        [3,0,3,0,0,3,0,3,3,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ],
        ]
    },
    {
        trackName:"16th triples",
        time:"4/4",
        measure:"16th triplets",

        track:[
        [  
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1],
        [0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,3,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,2],
    ]
        ],
        
    },
    {
        trackName:"16th triples chop",
        time:"4/4",
        measure:"16th triplets",

        track:[
        [  
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0],
        [0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0],
    ],
    [  
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,3,3],
        [2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0,0,0,0,0],
    ]
        ],
        
    },
    {
        trackName:"3/4 8th notes triplets",
        time:"3/4",
        measure:"8th triplets",

        track:[
        [[0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,2,2,0,0,2,2,0,2],
        [0,0,0,0,2,0,0,2,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [2,0,0,2,0,0,0,0,0],
        ]]
    },
    {
        trackName:"porcaro shuffle",
        time:"4/4",
        measure:"8th triplets",

        track:[
        [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,2,2,0,2,2,0,2,2,0,2],
        [0,1,0,0,1,0,3,1,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,0,0,0,2,0,0,0,2,0,0],    
       ],[
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [2,0,2,2,0,2,2,0,2,2,0,2],
        [0,1,0,0,1,0,3,1,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,2,0,0,0,0,0,0,0,0,2],
       ]
        ]
    },
],
    customableTrack:[],
    beatMeasures:[
        {
            time:"4/4",
            measure:"8th",
            count:[
                "1","&", 
                "2","&", 
                "3","&", 
                "4", "&"]
        },
        {
            time:"3/4",
            measure:"8th",
            count:[
                "1","&", 
                "2","&", 
                "3","&"]
        },
        {
            time:"4/4",
            measure:"16th",
            count:[
                "1","e","&","a",
                "2","e","&","a", 
                "3","e","&","a", 
                "4","e","&","a",]
        },
        {
            time:"3/4",
            measure:"8th triplets",
            count:[
                "1", "trip", "let",
                "2", "trip", "let",
                "3", "trip", "let",
            ]
        },
        {
            time:"3/4",
            measure:"16th",
            count:[
                "1","e","&","a",
                "2","e","&","a", 
                "3","e","&","a", 
            ]
        },
        {            
            time:"4/4",
            measure:"8th triplets",
            count:[
                "1", "trip", "let",
                "2", "trip", "let",
                "3", "trip", "let",
                "4", "trip", "let",
            ]
        },
        {
            time:"4/4",
            measure:"16th triplets",
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
        case UPDATE_TRACK:
        return {...state, customableTrack:action.payload.updatedTrack, numOfBars:action.payload.updatedTrack.length}    
        break;
        case CHANGE_BARS_NUMBER:
            const direction=action.payload.direction;
            return {
                ...state, 
                numOfBars:direction==="+"?state.numOfBars+1:state.numOfBars-1,
                customableTrack:direction==="+"?[...state.customableTrack, state.tracks[state.trackIndex].track[0]]:state.customableTrack.slice(0,-1),
            }    
            break;
        case LOAD_DRUMPADS:
        return {
            ...state,
            drumPads:[...action.payload.drumpads]
        }
        break;
        default:

        console.log("co za akcja wariacie");
    }

     return state;

}
export default state;