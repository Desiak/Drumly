import React, {useEffect, useState, useRef} from 'react'
import { connect } from 'react-redux'

const Player=(props)=> {

    // BUTTON który ukrywa drumset i rozciąga player na całą wysokość

    const activeTrack= props.tracks[props.trackIndex];
    const tracksLabels=["CR", "RD", "HH", "SN", "T-1", "T-2", "F-T", "K"];
    const beatMeasures= props.beatMeasures;
    let barLength=props.tracks[props.trackIndex].track[0].length;
    let measureIndex= barLength===8?0:1;

    const [intervalId, setIntervalId]=useState(null);
    const [currentBarNumber, setCurrentBarNumber]=useState(0);

    const beat=activeTrack.track.map((track, index)=>{
        return <div className={`track track-${index}`} >
            {/* <p className="track-label">{tracksLabels[index]}</p> */}
            {track.map(note=>
            <div className={`note ${note===1?"active":""}`}>
            </div>)}
        </div>
    });

    //DOM
    const progressBar= useRef(null);
    const beatWrapper=useRef(null);

    const animateProgressBar=()=>{
        // progressBar.current.style.width="100%";
        progressBar.current.classList.remove("playing");
        setTimeout(() => {
            progressBar.current.classList.add("playing");

        }, 100);

    }

    const handleBeatWrapperPos=()=>{
            beatWrapper.current.style.transform=`translateX(-${(currentBarNumber)*100}%)`;
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

                }, 5000))
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
        for(let i=0;i<props.numOfBars;i++){
            barsToRender.push(<div className={`bar bar-${i}`}>{beat}</div>)
        }
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
   
    return (
        <div className="container player-container">
        <div className="progress-indicator" ref={progressBar}></div>
        <div className="bar-number-wrapper wrapper">
            <button className="arrow arrow-prev" onClick={()=>handleBarsNav("-")}>&#8249;</button>
            <span className="bar-number">Bar {currentBarNumber+1} of {props.numOfBars}</span>
            <button className="arrow arrow-next" onClick={()=>handleBarsNav("+")}>&#8250;</button>

        </div>
        <div className="beat-measure-wrapper wrapper">
            {renderBars("measure")}
        </div>
        <div className="tracks-labels-wrapper wrapper">
            {tracksLabels.map(label=><p className="track-label">{label}</p>)}
        </div>
        <div className="beat-wrapper wrapper" ref={beatWrapper}> 
        {renderBars("beat")}
        </div>
        
        </div>
    )
}

const mapStateToProps=store=>({
    tracks: store.state.tracks,
    trackIndex: store.state.trackIndex,
    beatMeasures: store.state.beatMeasures,
    numOfBars:store.state.numOfBars,
    isPlaying:store.state.isPlaying
})
const PlayerConsumer = connect(mapStateToProps)(Player);

export default PlayerConsumer;