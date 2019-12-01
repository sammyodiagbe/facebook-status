import React, { useRef, useEffect, useState } from "react";

export default function NewStatus({ open, color, setColor, addStatus }) {
  const textRef = useRef(null);
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(40);

  useEffect(() => {
    if (open) {
      textRef.current.focus();
    } else {
      setText("");
      setFontSize(40);
    }
  }, [open]);

  const changeColor = e => {
    const { color } = e.target.dataset;
    setColor(color);
  };

  const handleStatusChange = e => {
    const { value } = e.target;
    if (value.length > 100 && value.length < 150) {
      setFontSize(30);
    } else if (value.length > 150 && value.length < 190) {
      setFontSize(25);
    } else if (value.length > 190 && value.length < 250) {
      setFontSize(19);
    } else if (value.length > 300) {
      return;
    }
    setText(value);
  };

  const createStatus = () => {
    const newStatus = { text, color, fontSize };
    addStatus(newStatus);
  };
  return (
    <div className={`new-status ${open ? "open-dialog" : ""}`}>
      <textarea
        ref={textRef}
        style={{ background: color, fontSize: `${fontSize}px` }}
        onChange={handleStatusChange}
        value={text}
      ></textarea>
      <div className="color-container">
        <button
          className="color orange"
          onClick={changeColor}
          data-color="orange"
        ></button>
        <button
          className="color blue"
          onClick={changeColor}
          data-color="blue"
        ></button>
        <button
          className="color yellow"
          onClick={changeColor}
          data-color="#344244"
        ></button>
        <button
          className="color darkblue"
          onClick={changeColor}
          data-color="darkblue"
        ></button>
        <button
          className="color slateblue"
          onClick={changeColor}
          data-color="slateblue"
        ></button>
        <button
          className="color pink"
          onClick={changeColor}
          data-color="pink"
        ></button>
        <button
          className="color dodgerblue"
          onClick={changeColor}
          data-color="dodgerblue"
        ></button>
        <button
          className="color teal"
          onClick={changeColor}
          data-color="teal"
        ></button>
      </div>
      <button className="save-status" onClick={createStatus}>
        <i className="fa fa-send" />
      </button>
    </div>
  );
}
