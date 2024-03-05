import React, { useState } from "react";

const ControlAddTask = ({ handleAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      handleAddTask((prev) => {
        return [
          ...prev,
          {
            id: Date.now(),
            nameTodo: inputValue,
            status: false,
          },
        ];
      });
      setInputValue("");
    }
  };
  return (
    <div className="w-4/12 flex justify-between mt-3">
      <form onSubmit={handleOnSubmit} className="w-full flex justify-between">
        <input
          type="text"
          className="w-5/6 border-1 rounded-lg p-2 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500
          disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
          invalid:border-gray-500 invalid:text-gray-600
          focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="bg-sky-600 text-white rounded-lg p-2 w-20">
          Add
        </button>
      </form>
    </div>
  );
};

export default ControlAddTask;
