import React, {useEffect, useState, useRef} from 'react'
import { connect } from 'react-redux'
import {loadCustomableTrack, updateTrack} from "../actions/actions";
import ChangeOrder from './ChangeOrder';
import _ from "lodash";
import {gsap} from "gsap";

const Player=(props)=> {
    const tracksLabels=["CR", "RD", "HH", "SN", "T-1", "T-2", "F-T", "K"];
    const pathSelectors=["crash", "ride", "hihat", "snare", "tom1", "tom2", "floor", "kick"];
    let barLength=props.tracks[props.trackIndex].track[0][0].length;
    const setTrackOrder=(unorderedTrack)=>{
        const orderedTrack=unorderedTrack.map((bar, index)=>{
            return {id: `${bar.id}`,order:index, value:bar.value, isActive:index===currentBarNumber?true:false}
        })
        return orderedTrack;
    }

    const [intervalId, setIntervalId]=useState(null);
    const [scheduleInterval, setScheduleInterval]=useState(null);
    const [currentBarNumber, setCurrentBarNumber]=useState(0);
    const [orderedTrack, setOrderedTrack]=useState(setTrackOrder(props.customableTrack));
    const [measure, setMeasure]=useState(null);
    const [progressBarSpeed, setProgressBarSpeed]=useState(80);
    const [tracksToRender, setTracksToRender]=useState(null);
    const [measureCount,setMeasureCount]=useState(props.beatMeasures[0]);
    const progressBarAnimation=useRef(null);
    const [draggedBoxId, setDraggedBoxId]=useState(null);
    //DOM
    const progressBar= useRef(null);
    const beatWrapper=useRef(null);
    const changeOrderSection=useRef(null);

    useEffect(() => {
      updateBeat(orderedTrack, "effect");
    }, [orderedTrack])

    useEffect(() => {
       handleBarsPosition();
    }, [tracksToRender])

   
    const handleBarsPosition=()=>{  
        //     beatWrapper.current.style.transform=`translateX(-${(currentBarNumber)*100}%)`;
        // setOrderedTrack(setTrackOrder(props.customableTrack));

        const previousIndex= currentBarNumber>0?currentBarNumber-1:orderedTrack.length-1;
        const nextIndex= currentBarNumber<orderedTrack.length-1? currentBarNumber+1:0;
        const barsNodes=beatWrapper.current.childNodes;

        if(barsNodes.length===0)return;
        let animDuration=props.isPlaying?0:0.5;
        if(barsNodes.length===1){
            gsap.to(barsNodes[0], {x:"0%", opacity:1, duration:animDuration});

        }else if (barsNodes.length===2){
           
            gsap.to(barsNodes[0], {x:currentBarNumber===0?"0%":"-100%", opacity:currentBarNumber===0?1:0, duration:animDuration});
            gsap.to(barsNodes[1], {x:currentBarNumber===0?"100%":"0%", opacity:currentBarNumber===0?0:1, duration:animDuration});
        }
        else{
        barsNodes.forEach((bar,index)=>{
            switch (index) {
                case previousIndex:
                    gsap.to(bar, {x:"-100%", opacity:0, duration:animDuration});
                break;
                case currentBarNumber:
                    gsap.to(bar, {x:"0%", opacity:1, duration:animDuration});
                break;
                case nextIndex:
                    gsap.to(bar, {x:"100%", opacity:0, duration:animDuration});
                break;
                default:
                    gsap.to(bar, {x:"0%", opacity:0, duration:animDuration})
                    break;
            }
        })
        }
        }

    const editNote=(e)=>{
        const noteLocation=e.target.id.split("-");
        const barIndex=noteLocation[0];
        const pathIndex= noteLocation[1];
        const noteIndex=noteLocation[2];
       
        let newTrack= _.cloneDeep(props.customableTrack);
        let modifiedBar=newTrack[barIndex];
        let modifiedPath=[...modifiedBar.value[pathIndex]];
        let modifiedNote=modifiedPath[noteIndex]>=3?0:modifiedPath[noteIndex]+1;

        modifiedPath.splice(noteIndex,1,modifiedNote);
        modifiedBar.value.splice(pathIndex,1,modifiedPath);
        newTrack.splice(barIndex,1, modifiedBar);
        
        // update global state
        props.updateTrack(newTrack);
    }

    const updateBeat=(changedBeat)=>{
        let updatedTracks= changedBeat
        .sort((a,b)=>a.order-b.order)
        .map((bar, index)=>{
                return (
                <div className={`bar bar-${index}`} key={index}>
                    <p className="bar-index">{index+1}</p>
                    {bar.value.map((track,trackIndex)=>{
                        return <div className={`track track-${trackIndex}`} key={`${index}-${trackIndex}`}>
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
                                id={`${index}-${trackIndex}-${noteIndex}`}
                                key={`${index}-${trackIndex}-${noteIndex}`}
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
        const track=orderedTrack;
        track[barInd].value.forEach((path,i)=>{
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

    const renderMeasureContent=()=>{
        let measure=[];
        measure.push(<div className={`bar bar--measure`}>{measureCount.count.map(step=><div className={`beat-measure ${shouldHighlight(step)?"highlight":""}`}>{step}</div>)}</div>)
        return measure
    }

    const shouldHighlight=(step=> /^-?\d+$/.test(step)?true:false)

    const navToBar=(dest)=>{
        if(!props.isPlaying){
        if(typeof dest!=="number"){
            if(dest==="+"){
            setCurrentBarNumber(currentBarNumber===props.numOfBars-1?0:currentBarNumber+1);
        }
            else{
            currentBarNumber===0?setCurrentBarNumber(props.numOfBars-1):setCurrentBarNumber(currentBarNumber-1);
            setCurrentBarNumber(currentBarNumber===0?props.numOfBars-1:currentBarNumber-1);
        }
    }else {
        setCurrentBarNumber(dest)
    }
    }else return;
    }

    const handleDrag=(e)=>{
        setDraggedBoxId(e.currentTarget.id);
    }
    const handleDrop=(e)=>{
        const draggedBox=orderedTrack.find((box)=>box.id==draggedBoxId);
        const dropBox=orderedTrack.find((box)=>box.id==e.currentTarget.id);
        const prevDraggedBoxOrder=draggedBox.order;
        const prevDropBoxOrder= dropBox.order;

        const reorderedTrack=orderedTrack.map(bar=>{
            if(bar.id==draggedBoxId){
                bar.order=prevDropBoxOrder;
            }
            if(bar.id==e.currentTarget.id){
                bar.order=prevDraggedBoxOrder
            }
            return bar
        })
        setOrderedTrack(reorderedTrack);
        updateBeat(reorderedTrack, "drop");
        props.updateTrack(reorderedTrack);

    }
    useEffect(() => {
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
                handleBarsPosition(barIndex);
                setCurrentBarNumber(barIndex);
                progressBarAnimation.current.time(0);
                progressBarAnimation.current.play();

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
        handleBarsPosition();
    }, [currentBarNumber]);

    useEffect(() => {
        setMeasure(renderMeasureContent());
        setOrderedTrack(setTrackOrder(props.customableTrack));
    }, [props.customableTrack]);

    useEffect(()=>{
        setProgressBarSpeed((60/props.tempo*4));
    }, [props.tempo])

    useEffect(() => {
        props.loadCustomableTrack(props.tracks[props.trackIndex], props.numOfBars);
        const currentMeasure=props.beatMeasures.find(measure=>{
            const customTrack= props.tracks[props.trackIndex];

            return measure.time===customTrack.time && measure.measure===customTrack.measure;
        } );

        setMeasureCount(currentMeasure);
        setCurrentBarNumber(0);
    }, [props.trackIndex]);
   
    useEffect(() => {
       //if last bar gets removed, step back to previous one
       if(props.numOfBars===currentBarNumber){
           setCurrentBarNumber(props.numOfBars-1);
       }
    }, [props.numOfBars])

    //mount
useEffect(() => {
  progressBarAnimation.current=gsap.fromTo(progressBar.current, {x:"-100%"}, {x:"0%", ease:"linear", repeat:1, paused:true});
}, [])
    

    return (
        <div className="container player-container">
        <ChangeOrder 
        innerRef={changeOrderSection} 
        orderedTrack={orderedTrack} 
        handleDrag={handleDrag} 
        handleDrop={handleDrop} 
        navToBar={navToBar} 
        activeBarIndex={currentBarNumber}/>
        <div className="progress-indicator" ref={progressBar}></div>
        
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