import React from 'react';

import Tempo from "./Tempo";
import Note from "./Note";
import Bars from "./Bars";
import DrumsetSelect from "./DrumsetSelect";

const Menu=()=> {
    return (
        <div className="container menu-container">
            <Tempo></Tempo>
            <Note></Note>
            <Bars></Bars>
            <DrumsetSelect></DrumsetSelect>
        </div>
    )
}


export default Menu;
 
// const MenuConsumer = connect()(Menu);

// export default MenuConsumer;