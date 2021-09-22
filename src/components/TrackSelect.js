import React , {useRef, useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { trackSelect } from "../actions/actions";

const TrackSelect=(props)=> {

    const tracksList= useRef(null);
    const [trackListItems, setTrackListElements]= useState([]);

  
    useEffect(() => {
        //highlight active tracks list element
        if(tracksList.current.childNodes[props.trackIndex]){
        tracksList.current.childNodes[props.trackIndex].classList.add("active");
        }
        tracksList.current.childNodes.forEach((listElem,i)=>{
            if(i!==props.trackIndex){
            listElem.classList.remove("active");
            }
        });
    }, [props.trackIndex])

     useEffect(() => {

        setTrackListElements(()=>{
            const list=props.tracks.map((track,index)=>{
                return (
                <li key={track.trackName} className={`list-element track ${index===0?"active":""}`} onClick={()=>props.trackSelect(index)}>
                    <div className="element-wrapper">
                        <p>{track.trackName}</p>
                    </div>
                </li>)
            })
            return list;
        })

    props.trackSelect(0);
    
 }, [])

    return (
        <div className="input beat-select-section">
            Selected track: {props.tracks[props.trackIndex].trackName}
            <div className="list-wrapper">
            <ul className="tracks-list" ref={tracksList}> 
                {trackListItems}
            </ul>
            </div>
            
        </div>
    )
}

const mapStateToProps=store=>({
    tracks: store.state.tracks,
    trackIndex: store.state.trackIndex,
});

//DOBRY PRZYKŁAD
const mapDispatchToProps={
    trackSelect
}

const TrackSelectConsumer = connect(mapStateToProps, mapDispatchToProps)(TrackSelect);

export default TrackSelectConsumer;
