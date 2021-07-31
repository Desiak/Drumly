import React from 'react';

import Tempo from "./Tempo";
import TrackSelect from "./TrackSelect";
import Bars from "./Bars";
import DrumsetSelect from "./DrumsetSelect";

const Menu=()=> {
    return (
        <div className="container menu-container">
            <Tempo></Tempo>
            <Bars></Bars>
            <DrumsetSelect></DrumsetSelect>
            <TrackSelect></TrackSelect>
        </div>
    )
}


export default Menu;
 
// const MenuConsumer = connect()(Menu);

// export default MenuConsumer;