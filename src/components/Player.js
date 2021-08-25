import React, {useEffect, useState, useRef} from 'react'
import { connect } from 'react-redux'
import {loadCustomableTrack, toggleNoteActiveState} from "../actions/actions";
import _ from "lodash";

const Player=(props)=> {

    // BUTTON który ukrywa drumset i rozciąga player na całą wysokość

    const tracksLabels=["CR", "RD", "HH", "SN", "T-1", "T-2", "F-T", "K"];
    const beatMeasures= props.beatMeasures;
    let barLength=props.tracks[props.trackIndex].track[0].length;
    let measureIndex= barLength===8?0:1;

    const [intervalId, setIntervalId]=useState(null);
    const [currentBarNumber, setCurrentBarNumber]=useState(0);
    const [measure, setMeasure]=useState(null);
    const [progressBarSpeed, setProgressBarSpeed]=useState(80);
    const [tracksToRender, setTracksToRender]=useState(null);
    
    //DOM
    const progressBar= useRef(null);
    const beatWrapper=useRef(null);

   
    const animateProgressBar=()=>{
        // progressBar.current.style.width="100%";
        progressBar.current.classList.remove("playing");
        progressBar.current.style="";

        setTimeout(() => {
            progressBar.current.classList.add("playing");
            progressBar.current.style.transition=`transform ${progressBarSpeed}s linear`

        }, 100);

    }

    const handleBeatWrapperPos=()=>{
            beatWrapper.current.style.transform=`translateX(-${(currentBarNumber)*100}%)`;
        }

    const toggleNoteActiveState=(e)=>{
        const noteLocation=e.target.id.split("-");
        const barIndex=noteLocation[0];
        const trackIndex= noteLocation[1];
        const noteIndex=noteLocation[2];
       
        let newTrack= _.cloneDeep(props.customableTrack);

        let modifiedBar=[...newTrack[barIndex]];
        let modifiedPath=[...modifiedBar[trackIndex]];
        let modifiedNote=modifiedPath[noteIndex]===0?1:0;

        modifiedPath.splice(noteIndex,1,modifiedNote);
        modifiedBar.splice(trackIndex,1,modifiedPath);
        newTrack.splice(barIndex,1, modifiedBar);
        
        //update global state
        props.toggleNoteActiveState(newTrack);
    }
    const updateTracks=()=>{
        let updatedTracks=props.customableTrack.map((bar,barIndex)=>{
            return (
            <div className={`bar bar-${barIndex}`} key={barIndex}>
                {bar.map((track,trackIndex)=>{
                    return <div className={`track track-${trackIndex}`} key={`${barIndex}-${trackIndex}`}>
                        {track.map((note,noteIndex)=>{
                            return (
                            <div 
                            className={`note ${note===1?"active":""}`} 
                            onClick={(e)=>toggleNoteActiveState(e)} 
                            id={`${barIndex}-${trackIndex}-${noteIndex}`}
                            key={`${barIndex}-${trackIndex}-${noteIndex}`}
                            >
                            
                            </div>)
                        })}
                    </div>
                })}
            </div>
            )

        });

        setTracksToRender(updatedTracks)
    }

    useEffect(() => {
        if(progressBar){
            let currentBar=0;
            
        if(props.isPlaying){
            //start playing
            setCurrentBarNumber(0);
            animateProgressBar();

            setIntervalId(
                setInterval(() => {
                animateProgressBar();
                handleBeatWrapperPos(currentBar);
                currentBar=currentBar>=props.numOfBars-1?0:currentBar+1;

                setCurrentBarNumber(currentBar);

                }, progressBarSpeed*1000))
            ;
        }
        else{
            //stop playing
            clearInterval(intervalId);
            setIntervalId(null);
            progressBar.current.classList.remove("playing");
            beatWrapper.current.style.transform="unset";
            setCurrentBarNumber(0);

        }
    }
    }, [props.isPlaying])

    useEffect(() => {
        handleBeatWrapperPos();

    }, [currentBarNumber]);

    const renderBars=(content)=>{
        let barsToRender=[];
        if(content==="beat"){
            return
        }else if(content==="measure"){
            for(let i=0;i<props.numOfBars;i++){
                barsToRender.push(<div className={`bar bar--measure bar-${i}`}>{beatMeasures[measureIndex].measure.map(measure=><div className="beat-measure">{measure}</div>)}</div>)
            }
        }
        return barsToRender
    }

    const handleBarsNav=(direction)=>{

        if(!props.isPlaying){
        if(direction==="+"){
            setCurrentBarNumber(currentBarNumber===props.numOfBars-1?0:currentBarNumber+1);
        }
        else{
            currentBarNumber===0?setCurrentBarNumber(props.numOfBars-1):setCurrentBarNumber(currentBarNumber-1);
            setCurrentBarNumber(currentBarNumber===0?props.numOfBars-1:currentBarNumber-1);
        }
    }else return;
    }

    useEffect(() => {
        // setBeatBars(renderBars("beat"));
        setMeasure(renderBars("measure"));
        updateTracks();
    }, [props.customableTrack]);

    useEffect(()=>{
        setProgressBarSpeed((60/props.tempo*4));

    }, [props.tempo])
    useEffect(() => {
        props.loadCustomableTrack(props.tracks[props.trackIndex], props.numOfBars);
    }, [props.trackIndex]);
   

    //mount
 
    
    return (
        <div className="container player-container">
        <div className="progress-indicator" ref={progressBar}></div>
        <div className="bar-number-wrapper wrapper">
            <button className="arrow arrow-prev" onClick={()=>handleBarsNav("-")}>&#8249;</button>
            <span className="bar-number">Bar {currentBarNumber+1} of {props.numOfBars}</span>
            <button className="arrow arrow-next" onClick={()=>handleBarsNav("+")}>&#8250;</button>

        </div>
        <div className="beat-measure-wrapper wrapper">
            {measure}
        </div>
        <div className="tracks-labels-wrapper wrapper">
            {tracksLabels.map(label=><p className="track-label" >{label}</p>)}
        </div>
        <div className="beat-wrapper wrapper" ref={beatWrapper}> 
        {tracksToRender}
        </div>
        
        </div>
    )
}

const mapStateToProps=store=>({
    customableTrack: store.state.customableTrack,
    tracks: store.state.tracks,
    trackIndex: store.state.trackIndex,
    beatMeasures: store.state.beatMeasures,
    numOfBars:store.state.numOfBars,
    isPlaying:store.state.isPlaying,
    tempo:store.state.tempo,
});

const mapDispatchToProps={
    loadCustomableTrack,
    toggleNoteActiveState,
}
const PlayerConsumer = connect(mapStateToProps, mapDispatchToProps)(Player);

export default PlayerConsumer;