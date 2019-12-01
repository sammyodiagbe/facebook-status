import React, { useState } from "react";

export default function StatusTimer({ statuses, activeIndex, setActiveIndex }) {
  // const [statuses] = useState([1, 2, 3, 4, 5, 8, 5, 6, 7, 4]);
  const interval = setInterval(() => {
    if (activeIndex >= statuses.length) return clearInterval(interval);
    setActiveIndex(activeIndex + 1);
  }, 15000);
  const drawStatusesTimer = statuses.map((status, index) => {
    return <div className="status-timer" key={index}></div>;
  });
  return <div className="status-timer-container">{drawStatusesTimer}</div>;
}
