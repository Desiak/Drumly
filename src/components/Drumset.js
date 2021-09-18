import React, {useEffect, useRef} from 'react'
import {connect} from "react-redux";
import {loadDrumPads} from "../actions/actions";

const Drumset=(props)=> {
    const drumset= useRef(null);

    useEffect(() => {
        const drumPadsArray= Array.prototype.slice.call(drumset.current.childNodes)
     props.loadDrumPads(drumPadsArray.reverse());
    }, [])
    return (
        <div className="container drumset-container">
            <div className="drumset" ref={drumset}>
            <img alt="drum pad" src="./assets/imgs/kick-pad.svg" className="drumset-pad drumset-pad--kick"></img>
            <img alt="drum pad" src="./assets/imgs/floor-tom-pad.svg" className="drumset-pad drumset-pad--floor-tom"></img>
            <img alt="drum pad" src="./assets/imgs/tom-2-pad.svg" className="drumset-pad drumset-pad--tom-2"></img>
            <img alt="drum pad" src="./assets/imgs/tom-1-pad.svg" className="drumset-pad drumset-pad--tom-1"></img>
            <img alt="drum pad" src="./assets/imgs/snare-pad.svg" className="drumset-pad drumset-pad--snare"></img>
            <img alt="drum pad" src="./assets/imgs/hihat-pad.svg" className="drumset-pad drumset-pad--hihat"></img>
            <img alt="drum pad" src="./assets/imgs/ride-pad.svg" className="drumset-pad drumset-pad--ride"></img>
            <img alt="drum pad" src="./assets/imgs/crash-pad.svg" className="drumset-pad drumset-pad--crash"></img>
            </div> 
        </div>
    )
}

const mapStateToProps = store=>({
    drumset:store.state.drumset,
});
const mapDispatchToProps={
    loadDrumPads
}
const DrumsetConsumer = connect(mapStateToProps, mapDispatchToProps)(Drumset);

export default DrumsetConsumer;