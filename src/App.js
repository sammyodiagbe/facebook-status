import React, { useState } from "react";
import StatusTimer from "./components/status-timer";
import StatusBody from "./components/status-body";
import NewStatus from "./components/new-status";

function App() {
  const [statusCreator, openStatusDialog] = useState(false);
  const [color, setColor] = useState("orange");
  const [statuses, setStatuses] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  let addStatus = status => {
    let newstatuses = [...statuses, status];
    setStatuses(newstatuses);
  };
  return (
    <div className="facebook-status">
      <div className="button-container">
        <button
          className="add-new-status"
          onClick={() => {
            openStatusDialog(!statusCreator);
          }}
        >
          <i
            className={`fa fa-${statusCreator ? "times" : "edit"}`}
            style={{ fontWeight: "bolder", fontSize: "19px" }}
          />
        </button>
      </div>

      <div className="status-container">
        <div className="status">
          <StatusTimer
            statuses={statuses}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <StatusBody status={statuses.length ? statuses[activeIndex] : null} />
        </div>
        <NewStatus
          open={statusCreator}
          color={color}
          setColor={setColor}
          addStatus={addStatus}
        />
      </div>
    </div>
  );
}

export default App;
