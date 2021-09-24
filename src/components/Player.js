import React, {useEffect, useState, useRef} from 'react'
import { connect } from 'react-redux'
import {loadCustomableTrack, updateTrack} from "../actions/actions";
import _ from "lodash";
import {gsap} from "gsap";

const Player=(props)=> {

    // BUTTON który ukrywa drumset i rozciąga player na całą wysokość

    const tracksLabels=["CR", "RD", "HH", "SN", "T-1", "T-2", "F-T", "K"];
    const pathSelectors=["crash", "ride", "hihat", "snare", "tom1", "tom2", "floor", "kick"];
    
    let barLength=props.tracks[props.trackIndex].track[0][0].length;


    const [intervalId, setIntervalId]=useState(null);
    const [scheduleInterval, setScheduleInterval]=useState(null);
    const [currentBarNumber, setCurrentBarNumber]=useState(0);
    const [measure, setMeasure]=useState(null);
    const [progressBarSpeed, setProgressBarSpeed]=useState(80);
    const [tracksToRender, setTracksToRender]=useState(null);
    const [measureCount,setMeasureCount]=useState(props.beatMeasures[0]);
    const progressBarAnimation=useRef(null);

    //DOM
    const progressBar= useRef(null);
    const beatWrapper=useRef(null);


    const handleBeatWrapperPos=()=>{
            beatWrapper.current.style.transform=`translateX(-${(currentBarNumber)*100}%)`;
        }

    const editNote=(e)=>{
        const noteLocation=e.target.id.split("-");
        const barIndex=noteLocation[0];
        const pathIndex= noteLocation[1];
        const noteIndex=noteLocation[2];
       
        let newTrack= _.cloneDeep(props.customableTrack);

        let modifiedBar=[...newTrack[barIndex]];
        let modifiedPath=[...modifiedBar[pathIndex]];
        let modifiedNote=modifiedPath[noteIndex]>=3?0:modifiedPath[noteIndex]+1;

        modifiedPath.splice(noteIndex,1,modifiedNote);
        modifiedBar.splice(pathIndex,1,modifiedPath);
        newTrack.splice(barIndex,1, modifiedBar);
        
        //update global state
        props.updateTrack(newTrack);
    }
    const updateTracks=()=>{
        let updatedTracks=props.customableTrack.map((bar,barIndex)=>{
            return (
            <div className={`bar bar-${barIndex}`} key={barIndex}>
                <p className="bar-index">{barIndex+1}</p>
                {bar.map((track,trackIndex)=>{
                    return <div className={`track track-${trackIndex}`} key={`${barIndex}-${trackIndex}`}>
                        {track.map((note,noteIndex)=>{
                            let intensityClass="";
                            switch (note) {
                                case 1:
                                    intensityClass="ghost-note"
                                    break;
                                case 2:
                                    intensityClass="regular"
                                    break;
                                case 3:
                                    intensityClass="accent"
                                    break;
                                default:
                                
                                    break;
                            }
                            return (
                            <div 
                            className={`note ${intensityClass}`} 
                            onClick={(e)=>editNote(e)} 
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
    const scheduleSounds=(barInd=0, noteInd=0)=>{    
        const track=props.customableTrack;
        track[barInd].forEach((path,i)=>{
                path.forEach((note,index)=>{
                    if(index===noteInd){
                    if(note!==0){
                        const sound = new Audio(`/assets/${pathSelectors[i]}.mp3`);
                        let volume;
                        const padToAnimate=props.drumPads[i];
                        const tl=gsap.timeline({autoAlpha:0, ease:"ease"});

                     
                        switch (note) {
                            case 1:
                                volume=0.05;
                                tl.to(padToAnimate, 0.1,{opacity:0.6, scale:1.02});
                                tl.to(padToAnimate, 0.1,{opacity:0.5, scale:1});
                            break;
                            case 2:
                                volume=0.5;
                                tl.to(padToAnimate, 0.1,{opacity:0.8, scale:1.05});
                                tl.to(padToAnimate, 0.1,{opacity:0.5, scale:1});
                            break;
                            case 3:
                                volume=1;
                                tl.to(padToAnimate, 0.1,{opacity:1, scale:1.10});
                                tl.to(padToAnimate, 0.1,{opacity:0.5, scale:1});
                            break;
                            default:
                                break;
                        }
                        sound.volume=volume;
                        sound.play();
                    }
                }
                })
            
           
        })
    }

    const renderBars=(content)=>{
        let barsToRender=[];
        if(content==="beat"){
            return
        }else if(content==="measure"){
            for(let i=0;i<props.numOfBars;i++){
                barsToRender.push(<div className={`bar bar--measure bar-${i}`}>{measureCount.count.map(step=><div className={`beat-measure ${shouldHighlight(step)?"highlight":""}`}>{step}</div>)}</div>)
            }
        }
        return barsToRender
    }

    const shouldHighlight=(step=> /^-?\d+$/.test(step)?true:false)

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
        console.log("use effect load", progressBarAnimation)
        if(progressBar && progressBarAnimation.current){
            let barIndex=0;
            let noteIndex=0;
        if(props.isPlaying){
            //start playing
            setCurrentBarNumber(0);
            progressBarAnimation.current.duration(progressBarSpeed);
            progressBarAnimation.current.play();
            scheduleSounds(0, noteIndex);
            setIntervalId(
                setInterval(() => {
                handleBeatWrapperPos(barIndex);
                setCurrentBarNumber(barIndex);
                }, progressBarSpeed*1000));

            setScheduleInterval(
                setInterval(() => {
                    noteIndex=noteIndex>=barLength-1?0:noteIndex+1;
                    scheduleSounds(barIndex, noteIndex);
                    if(noteIndex===barLength-1){
                        barIndex=barIndex>=props.numOfBars-1?0:barIndex+1;
                    }
                }, (progressBarSpeed*1000)/barLength)
            )
            
        }
        else{
            //stop playing
            clearInterval(intervalId);
            clearInterval(scheduleInterval);
            setScheduleInterval(null);
            setIntervalId(null);
            beatWrapper.current.style.transform="unset";
            setCurrentBarNumber(0);
            progressBarAnimation.current.pause(0);

        }
    }
    }, [props.isPlaying])

    useEffect(() => {
        handleBeatWrapperPos();

    }, [currentBarNumber]);

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
        const currentMeasure=props.beatMeasures.find(measure=>{
            const selectedTrack= props.tracks[props.trackIndex];

            return measure.time===selectedTrack.time && measure.measure===selectedTrack.measure;
        } );

        setMeasureCount(currentMeasure);
    }, [props.trackIndex]);
   
    useEffect(() => {
       //if last bar gets removed, step back to previous one
       if(props.numOfBars===currentBarNumber){
           setCurrentBarNumber(props.numOfBars-1);
       }
    }, [props.numOfBars])

    //mount
useEffect(() => {
  console.log(progressBar.current);
  progressBarAnimation.current=gsap.fromTo(progressBar.current, {x:"-100%"}, {x:"0%", ease:"linear", repeat:-1, paused:true});
}, [])
    
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
        <div className={`beat-wrapper wrapper ${props.isPlaying?"":"smooth"}`} ref={beatWrapper}> 
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
    drumPads:store.state.drumPads,
});

const mapDispatchToProps={
    loadCustomableTrack,
    updateTrack,
}
const PlayerConsumer = connect(mapStateToProps, mapDispatchToProps)(Player);

export default PlayerConsumer;