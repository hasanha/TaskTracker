import React, { useState, createContext, useEffect } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [element, setElement] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeItem = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    if (localStorage.getItem("tasks")) {
      const storedData = localStorage.getItem("tasks");
      const parsedData = JSON.parse(storedData);
      const updatedData = parsedData.filter((item) => item.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedData));
    }
    setTasks(newTasks);
  };

  const addItem = (item) => {
    setTimeout(() => {
      setTasks([...tasks, item]);
    }, 4000);
  };

  const changeCompleted = (id, completed) => {
    const elementsIndex = tasks.findIndex((item) => item.id === id);
    const newTasks = [...tasks];
    newTasks[elementsIndex] = {
      ...newTasks[elementsIndex],
      Completed: completed,
    };
    setTasks(newTasks);
  };

  const findItem = (id) => {
    const task = tasks.find((item) => item.id === id);
    setElement(task);
  };

  const editItem = (task) => {
    const edtask = tasks.map((item) => {
      return item.id === task.id ? task : item;
    });
    setTasks(edtask);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        removeItem,
        addItem,
        changeCompleted,
        findItem,
        editItem,
        element,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
