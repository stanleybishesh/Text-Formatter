import React, { useState } from "react";

export default function Time(props) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const updateTime = () => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  };
  updateTime();
  const handleClick = () => {
    props.changeStyle();
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <h5>
        Current Time: <span style={{ color: "red" }}>{time}</span>
      </h5>
      <button onClick={handleClick} className="btn btn-secondary">
        {props.btnText}
      </button>
    </div>
  );
}
