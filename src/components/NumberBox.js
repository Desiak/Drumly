import React from "react";

export default function NumberBox({
  bar,
  navToBar,
  activeBarIndex,
  barIndex,
  trackLength,
}) {
  return (
    <li
      className={`bar-box ${activeBarIndex === barIndex ? "active" : ""}`}
      id={bar.id}
      onMouseDown={(e) => {
        if (e.target.classList.contains("active")) {
          e.target.classList.remove("active");
        }
        navToBar(bar.order);
      }}
      style={{ width: 100 / 9 + "%" }}
    >
      <p className="number" draggable={false}>
        {barIndex + 1}
      </p>
    </li>
  );
}
