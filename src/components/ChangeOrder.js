import React from 'react'
import NumberBox from './NumberBox'
export default function ChangeOrder({innerRef,orderedTrack, handleDrag, handleDrop},ref) {
    return (
        <div className="change-order-section" ref={innerRef}>
                <ul className="bars-order-list">
                {orderedTrack
                .sort((a,b)=>a.order-b.order)
                .map((bar,index)=>{
                return <NumberBox bar={bar} handleDrag={handleDrag} handleDrop={handleDrop}/>
                })}
                </ul>
               </div>
    )
}
