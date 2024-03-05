import React, { useEffect } from "react";
("use client");
import { ImBin2 } from "react-icons/im";
import { Button } from "flowbite-react";

const ListTasks = ({ toDoList, setToDoList, active }) => {
  function handleCheckboxChange(id) {
    const updatedToDoList = toDoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: !item.status,
        };
      }
      return item;
    });
    setToDoList(updatedToDoList);
  }

  function handleRemove(id) {
    const updatedToDoList = toDoList.filter((item) => item.id !== id);
    setToDoList(updatedToDoList);
  }

  const handleDeleteList = () => {
    setToDoList([]);
  };

  return (
    <div className="w-4/12 flex flex-wrap justify-start mt-4 relative content-center text-center">
      <ul className="w-full">
        {toDoList
          .filter((item) => {
            if (active === "All") return true;
            if (active === "Active") return !item.status;
            if (active === "Completed") return item.status;
            return false;
          })
          .map((item) => (
            <li
              key={item.id}
              className="flex items-center border-b-2 border-gray-200 py-2"
            >
              <input
                type="checkbox"
                checked={item.status}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <p
                className={`pl-4 ${
                  item.status ? "line-through text-gray-500" : ""
                }`}
              >
                {item.nameTodo}
              </p>
              <ImBin2
                onClick={() => handleRemove(item.id)}
                className="text-red-500 cursor-pointer absolute right-0 mt-2 mr-2"
              />
            </li>
          ))}
      </ul>
      {toDoList.length > 0 && (
        <Button
          onClick={handleDeleteList}
          className="mt-4 bg-red-700 text-stone-800"
          color="red"
        >
          Delete all
        </Button>
      )}
    </div>
  );
};

export default ListTasks;
