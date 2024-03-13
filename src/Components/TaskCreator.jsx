/* eslint-disable react/prop-types */
import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  //console.log(props)
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName)
    setNewTaskName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="my-2 row">
        <div className="col-9">
          <input
            type="text"
            value={newTaskName}
            placeholder="Enter a New task"
            onChange={(e) => setNewTaskName(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="col-3">
          <button className="btn btn-primary btn-sm">Save Task</button>
        </div>
      </form>
    </>
  );
};
