import React, { useState } from "react";

const ControlFilter = ({ active, handleSetFilter, handleSetToDoList }) => {
  const handleToggle = (newActive) => {
    handleSetFilter(newActive);
  };

  return (
    <div className="filter flex justify-center">
      <div className="toggle-switch flex justify-around border-b-2 w-4/12">
        <button
          className={`toggle-btn text-stone-950 py-2 px-4 rounded-l ${
            active === "All" ? "active" : ""
          }`}
          onClick={() => handleToggle("All")}
        >
          All
        </button>
        <button
          className={`toggle-btn text-stone-950 py-2 px-4 ${
            active === "Active" ? "active" : ""
          }`}
          onClick={() => handleToggle("Active")}
        >
          Active
        </button>
        <button
          className={`toggle-btn text-stone-950 py-2 px-4 rounded-r ${
            active === "Completed" ? "active" : ""
          }`}
          onClick={() => handleToggle("Completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default ControlFilter;
