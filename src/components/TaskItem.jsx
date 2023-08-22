import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../css/TaskItem.css";
const TaskItem = ({ item }) => {
  const { removeItem, changeCompleted, findItem } = useContext(TaskContext);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleChange = (e) => {
    const { checked } = e.target;
    setIsCompleted(checked);
    changeCompleted(item.id, checked);
  };

  return (
    <li className="task__item nav-item  border p-2 m-4 ">
      <h6 className="task__title">{item.title}</h6>
      <p className="task__desc">{item.description}</p>
      <div className="task__elements mb-5">
        <div className="btn__container">
          <div className="checkbox__container">
            <label className="task__label">Completed</label>
            <input
              type="checkbox"
              className="task__check"
              checked={isCompleted}
              onChange={handleChange}
            />
          </div>
          <button
            className="task__edit btn btn-info float-right  "
            onClick={() => findItem(item.id)}
          >
            <p style={{ color: "white", margin: 0 }}>
              Edit <FontAwesomeIcon icon={faPen} className=" " />
            </p>
          </button>
          <button
            className="task__delete btn  btn-danger float-right"
            onClick={() => removeItem(item.id)}
          >
            Delete&nbsp;
            <FontAwesomeIcon icon={faTrash} className="" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
