import React, { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../css/TaskItem.css";
const TaskItem = ({ item }) => {
  const { changeCompleted } = useContext(TaskContext);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleChange = (e) => {
    const { checked } = e.target;
    setIsCompleted(checked);
    changeCompleted(item.id, checked);
  };

  return (
    <li className="task__item nav-item  border p-3 ">
      <h6 className="task__title">{item.title}</h6>
      <p className="task__desc">{item.description}</p>
      <div className="task__elements mb-5">
        <label className="task__label">Completed</label>
        <input
          type="checkbox"
          className="task__check"
          checked={isCompleted}
          onChange={handleChange}
        />
      </div>
    </li>
  );
};

export default TaskItem;
