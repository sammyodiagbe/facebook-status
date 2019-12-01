import React from "react";

export default function StatusBody({ status }) {
  return (
    <div
      className="status-body"
      style={{
        background: status ? `${status.color}` : "#fffff",
        color: status ? `#fff` : "#333"
      }}
    >
      {status ? (
        <p style={{ fontSize: `${status.fontSize}px` }}>{status.text}</p>
      ) : (
        <h1 style={{ fontSize: `30px` }}>No Status to Display</h1>
      )}
    </div>
  );
}
