import { React, useRef, useEffect } from "react";

const CircleProgressBar = ({ percentage, circularwidth, mine }) => {
  const radius = 80;
  const dasharray = radius * Math.PI * 2;
  const dashoffset = dasharray - (dasharray * percentage) / 100;

  return (
    <div className="outerofcircle">
      <svg
        width={circularwidth}
        height={circularwidth}
        viewBox={`0 0 ${circularwidth}  ${circularwidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="5%" stopColor="#9C79D2"></stop>
            <stop offset="50%" stopColor="#070f2b"></stop>
          </linearGradient>
        </defs>
        <circle
          cx={circularwidth / 2}
          cy={circularwidth / 2}
          strokeWidth="13px"
          r={radius}
          className="circle"
        />
        <circle
          cx={circularwidth / 2}
          cy={circularwidth / 2}
          strokeWidth="13px"
          r={radius}
          className="circle-prog"
          style={{
            strokeDasharray: dasharray,
            strokeDashoffset: dashoffset,
          }}
          transform={`rotate(-90 ${circularwidth / 2} ${circularwidth / 2})`}
          stroke="url(#gradient)"
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="mypercent"
        >
          {mine}%
        </text>
      </svg>
      {/* <h1 className="mypercent">
        {mine}
        <span style={{ fontSize: "32px", color: "#ddd" }}>%</span>
      </h1> */}
    </div>
  );
};

export default CircleProgressBar;
