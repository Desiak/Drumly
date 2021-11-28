import React, {useEffect, useState, useRef} from 'react'
import { connect } from 'react-redux'
import {loadCustomableTrack, updateTrack} from "../actions/actions";
import ChangeOrder from './ChangeOrder';
import {gsap} from "gsap";
import Bar from './Bar';

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

    const mobileCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
      };


    let scheduleInterval;
    let currentTime=0;
    const [currentBarNumber, setCurrentBarNumber]=useState(0);
    const [orderedTrack, setOrderedTrack]=useState(setTrackOrder(props.customableTrack));
    const [measure, setMeasure]=useState(null);
    const [progressBarSpeed, setProgressBarSpeed]=useState(80);
    const [tracksToRender, setTracksToRender]=useState(null);
    const [measureCount,setMeasureCount]=useState(props.beatMeasures[0]);
    const progressBarAnimation=useRef(null);
    const [draggedBoxId, setDraggedBoxId]=useState(null);
    const isMobile = mobileCheck();
    //DOM
    const progressBar= useRef(null);
    const beatWrapper=useRef(null);
    const changeOrderSection=useRef(null);
   
    const handleBarsPosition=()=>{  
        const previousIndex= currentBarNumber>0?currentBarNumber-1:orderedTrack.length-1;
        const nextIndex= currentBarNumber<orderedTrack.length-1? currentBarNumber+1:0;
        const barsNodes=beatWrapper.current.childNodes;

        if(barsNodes.length===0)return;
        let animDuration=props.isPlaying?0:0.5;
        if(barsNodes.length===1){
            gsap.to(barsNodes[0], {x:"0%", opacity:1, duration:animDuration});

        }else if (barsNodes.length===2){
            if(currentBarNumber===0){
                gsap.to(barsNodes[0], {x:"0%", opacity:1, duration:animDuration, pointerEvents:"all"});
                gsap.to(barsNodes[1], {x:"100%", opacity:0, duration:animDuration, pointerEvents:"none"});
            }
            else{
                gsap.to(barsNodes[0], {x:"-100%", opacity:0, duration:animDuration, pointerEvents:"none"});
                gsap.to(barsNodes[1], {x:"0%", opacity:1, duration:animDuration, pointerEvents:"all"});
            }
        }
        else{
        barsNodes.forEach((bar,index)=>{
            switch (index) {
                case previousIndex:
                    gsap.to(bar, {x:"-100%", opacity:0, duration:animDuration});
                break;
                case currentBarNumber:
                    gsap.to(bar, {x:"0%", opacity:1, duration:animDuration, pointerEvents:"all"});
                break;
                case nextIndex:
                    gsap.to(bar, {x:"100%", opacity:0, duration:animDuration});
                break;
                default:
                    gsap.to(bar, {x:"0%", opacity:0, duration:animDuration, pointerEvents:"none"})
                    break;
            }
        })
        }
        }

    const updateBeat=(changedBeat)=>{
        let updatedTracks= changedBeat
        .sort((a,b)=>a.order-b.order)
        .map((bar, barIndex)=><Bar bar={bar} barIndex={barIndex} />);
        setTracksToRender(updatedTracks)
    };

    const playSound= async (note, time, idx)=>{

        const url = `./assets/${props.drumset}/${pathSelectors[idx]}.mp3`;
        const volume=note===1?0.05:note===2?0.5:1.5;
        const source= props.audioContext.createBufferSource();
        const gainNode= props.audioContext.createGain();
        const audioBuffer= await fetch(url)
        .then(res=>res.arrayBuffer())
        .then(arrayBuffer=>props.audioContext.decodeAudioData(arrayBuffer));

        source.buffer=audioBuffer;
        gainNode.gain.setValueAtTime(volume, props.audioContext.currentTime)
        source.connect(gainNode).connect(props.audioContext.destination);

        if(!isMobile){
            const padToAnimate=props.drumPads[idx];
            const tl=gsap.timeline({autoAlpha:0, ease:"ease"});
            switch (note) {
                case 1:
                    tl.to(padToAnimate, 0.1,{opacity:0.6, scale:1.02});
                    tl.to(padToAnimate, 0.1,{opacity:0.5, scale:1});
                break;
                case 2:
                    tl.to(padToAnimate, 0.1,{opacity:0.8, scale:1.05});
                    tl.to(padToAnimate, 0.1,{opacity:0.5, scale:1});
                break;
                case 3:
                    tl.to(padToAnimate, 0.1,{opacity:1, scale:1.10});
                    tl.to(padToAnimate, 0.1,{opacity:0.5, scale:1});
                break;
                default:
                    break;
            }
        }

        source.start(time);
    }
    const scheduleSounds=(barInd=0, noteInd=0)=>{    
        const track=orderedTrack;
        currentTime=currentTime===0?props.audioContext.currentTime:currentTime+(progressBarSpeed)/barLength;

        if(props.audioContext.state==="suspended"){
            props.audioContext.resume();
        } 

        track[barInd].value.forEach((path,i)=>{
                path.forEach((note,index)=>{
                    if(index===noteInd){
                    if(note!==0) playSound(note, currentTime, i);
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
  

    const restartProgressBar=(barIndex)=>{
        handleBarsPosition(barIndex);
        setCurrentBarNumber(barIndex);
        progressBarAnimation.current.time(0);
        progressBarAnimation.current.play();
    }
    const startPlaying=(noteInd,barInd)=>{

        const isFirefox = !(window.mozInnerScreenX == null);

        // if(isMobile===null) mobileCheck()
        

        setCurrentBarNumber(0);
            progressBarAnimation.current.duration(isFirefox?progressBarSpeed*1.05:progressBarSpeed);
            progressBarAnimation.current.play();

            scheduleSounds(0, noteInd);

                scheduleInterval= setInterval(() => {
                    noteInd=noteInd>=barLength-1?0:noteInd+1;
                    if(noteInd===0){
                        restartProgressBar(barInd);
                    }
                    scheduleSounds(barInd, noteInd);
                    
                    if(noteInd===barLength-1){
                        barInd=barInd>=props.numOfBars-1?0:barInd+1;
                    }
                }, (progressBarSpeed*1000)/barLength)

    }
    const stopPlaying=()=>{

        clearInterval(scheduleInterval);
            beatWrapper.current.style.transform="unset";
            setCurrentBarNumber(0);
            progressBarAnimation.current.pause(0);
    }


    useEffect(() => {
        updateBeat(orderedTrack, "effect");
      }, [orderedTrack])
  
      useEffect(() => {
         handleBarsPosition();
      }, [tracksToRender])

    useEffect(() => {
    
        if(!progressBarAnimation.current){
            progressBarAnimation.current=gsap.fromTo(progressBar.current, {x:"-100%"}, {x:"0%", ease:"linear", paused:true});
        }
        if(progressBar){
            let barIndex=0;
            let noteIndex=0;
        if(props.isPlaying){
            startPlaying(noteIndex,barIndex);
        }
        else{
            stopPlaying();
        }
    }
    return ()=>{
        clearInterval(scheduleInterval);
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

    return (
        <div className={`container player-container ${props.isPlaying?"playing":"paused"}`}>
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
    drumset: store.state.drumset,
    audioContext: store.state.audioContext
});

const mapDispatchToProps={
    loadCustomableTrack,
    updateTrack,
}
const PlayerConsumer = connect(mapStateToProps, mapDispatchToProps)(Player);

export default PlayerConsumer;