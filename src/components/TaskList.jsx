import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";
import "../css/TaskList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import EditTask from "./EditTask";

const TaskList = () => {
  const { tasks, element } = useContext(TaskContext);

  return (
    <>
      {element ? <EditTask element={element} /> : ""}
      <h2 className="text-center mt-2 display-5">All Task</h2>
      <ul className="task__list list-unstyled p-3 m-3 rounded border">
        {tasks.length ? (
          tasks.map((item, index) => {
            return <TaskItem item={item} key={index} />;
          })
        ) : (
          <div>
            <h3 className="text-center display-7 alert alert-danger">
              No Tasks{" "}
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                style={{ color: "#fa0025" }}
              />
            </h3>
          </div>
        )}
      </ul>
    </>
  );
};

export default TaskList;
