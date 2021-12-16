import React from 'react'
import NumberBox from './NumberBox'
export default function ChangeOrder({innerRef,orderedTrack, navToBar, activeBarIndex, listRef}) {
    return (
        <div className="change-order-section" ref={innerRef}>
                <button className="arrow arrow-prev" onClick={()=>navToBar("-")}>&#8249;</button>
                <ul className="bars-order-list" ref={listRef}>
                {orderedTrack
                .sort((a,b)=>a.order-b.order)
                .map((bar,index)=>{
                return <NumberBox 
                bar={bar} 
                navToBar={navToBar} 
                activeBarIndex={activeBarIndex} 
                barIndex={index}
                key={index}/>
                })}
                </ul>
                <button className="arrow arrow-next" onClick={()=>navToBar("+")}>&#8250;</button>

               </div>
    )
}
