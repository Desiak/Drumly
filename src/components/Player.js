import React, {useEffect, useState, useRef} from 'react'
import { connect } from 'react-redux'
import {loadCustomableTrack, updateTrack} from "../actions/actions";
import _ from "lodash";
import {gsap} from "gsap";
import { TimelineMax } from 'gsap/gsap-core';

const Player=(props)=> {

    // BUTTON który ukrywa drumset i rozciąga player na całą wysokość

    const tracksLabels=["CR", "RD", "HH", "SN", "T-1", "T-2", "F-T", "K"];
    const pathSelectors=["crash", "ride", "hihat", "snare", "tom1", "tom2", "floor", "kick"];
    
    const beatMeasures= props.beatMeasures;
    let barLength=props.tracks[props.trackIndex].track[0][0].length;
    

    const [intervalId, setIntervalId]=useState(null);
    const [scheduleInterval, setScheduleInterval]=useState(null);
    const [currentBarNumber, setCurrentBarNumber]=useState(0);
    const [measure, setMeasure]=useState(null);
    const [progressBarSpeed, setProgressBarSpeed]=useState(80);
    const [tracksToRender, setTracksToRender]=useState(null);
    const [measureCount,setMeasureCount]=useState(props.beatMeasures[0]);
    
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

                        
                        // .fromTo(props.drumPads[i], {opacity:0.3}, {opacity:1, duration:0.2, ease:"linear"})
                        // // .to(props.drumPads[i], {opacity:1, duration:1})
                        // .to(props.drumPads[i], {autoAlpha:0.3, duration:0.1, ease:"linear"})
                        // const tl= gsap.timeline({duration:0.01, ease:"ease"});
                        // tl
                     
                        switch (note) {
                            case 1:
                                volume=0.05;
                                tl.to(padToAnimate, 0.08,{scale:1.1});
                                tl.to(padToAnimate, 0.08,{scale:1});
                            break;
                            case 2:
                                volume=0.5;
                                tl.to(padToAnimate, 0.08,{scale:1.2});
                                tl.to(padToAnimate, 0.08,{scale:1});
                            break;
                            case 3:
                                volume=1;
                                tl.to(padToAnimate, 0.08,{scale:1.4});
                                tl.to(padToAnimate, 0.08,{scale:1});
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
                barsToRender.push(<div className={`bar bar--measure bar-${i}`}>{measureCount.count.map(step=><div className="beat-measure">{step}</div>)}</div>)
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
        if(progressBar){
            let barIndex=0;
            let noteIndex=0;

        if(props.isPlaying){
            //start playing
            setCurrentBarNumber(0);
            animateProgressBar();
            scheduleSounds(0, noteIndex);

            setIntervalId(
                setInterval(() => {
                animateProgressBar();
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
            progressBar.current.classList.remove("playing");
            beatWrapper.current.style.transform="unset";
            setCurrentBarNumber(0);

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
    drumPads:store.state.drumPads,
});

const mapDispatchToProps={
    loadCustomableTrack,
    updateTrack,
}
const PlayerConsumer = connect(mapStateToProps, mapDispatchToProps)(Player);

export default PlayerConsumer;