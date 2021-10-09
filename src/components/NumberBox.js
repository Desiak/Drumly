import React from 'react'

export default function NumberBox({bar,handleDrag, handleDrop}) {
    return (
        <li 
        className={`bar-number`} 
        order={bar.id} id={bar.id} 
        draggable={true} 
        onDragOver={(ev) => ev.preventDefault()} 
        onDragStart={handleDrag} 
        onDrop={handleDrop}>
        <p className="number">{bar.id}</p>
        </li>
    )
}
