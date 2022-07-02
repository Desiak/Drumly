import React from "react";
import Note from "./Note";

export default function Bar({ bar, barIndex, isActive }) {
  return (
    <div className={`bar bar-${barIndex} ${isActive ? 'active' : ''}`} key={barIndex}>
      <p className="bar-index">{barIndex + 1}</p>
      {bar.value.map((track, trackIndex) => {
        return (
          <div
            className={`track track-${trackIndex}`}
            key={`${barIndex}-${trackIndex}`}
          >
            {track.map((value, idx) => {
              return (
                <Note
                  value={value}
                  indicator={`${barIndex}-${trackIndex}-${idx}`}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
