import { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import ListTasks from "./components/ListTasks";
import ControlAddTask from "./components/ControlAddTask";
import ControlFilter from "./components/ControlFilter";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [valueFilter, setValueFilter] = useState("All");

  function getToDoList() {
    const data = localStorage.getItem("toDoList");
    if (data) setToDoList(JSON.parse(data));
    else setToDoList([]);
  }

  function updateLocalStorage() {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }

  useEffect(() => {
    if (toDoList.length > 0) updateLocalStorage();
  }, [toDoList]);

  useEffect(() => {
    getToDoList();
  }, []);

  useEffect(() => {
    console.log(toDoList);
  }, [toDoList]);

  return (
    <div className="app flex flex-col h-lvh">
      <div className="header h-24 flex justify-center content-center">
        <Header />
      </div>
      <div className="main-content h-3/5">
        <div className="filter">
          <ControlFilter
            active={valueFilter}
            handleSetFilter={setValueFilter}
            handleSetToDoList={setToDoList}
          />
        </div>
        <div className="addtodo flex flex-wrap justify-center">
          <ControlAddTask handleAddTask={setToDoList} />
        </div>
        <div className="showContent flex justify-center">
          <ListTasks
            toDoList={toDoList}
            setToDoList={setToDoList}
            active={valueFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
