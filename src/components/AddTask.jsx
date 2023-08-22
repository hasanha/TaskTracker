import React, { useContext, useState } from "react";

import { TaskContext } from "../context/TaskContext";

const AddTask = () => {
  const { addItem } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      addItem(
        {
          title: title,
          description: description,
          Completed: false,
          id: Math.floor(Math.random() * 10000),
        },
        4000
      );
    });

    setTitle("");
    setDescription("");
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <form className="p-5 my-3 border" onSubmit={handleSubmit}>
      <h2 className="text-center display-6">Add New Task</h2>
      <div className="form-group py-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task Title"
          onChange={handleTitleChange}
          value={title}
        />
      </div>
      <div className="form-group py-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task Description"
          onChange={handleDescriptionChange}
          value={description}
        />
      </div>

      <button type="submit" className="btn btn-info btn-block">
        <p style={{ color: "white" }} className="m-0">
          Add
        </p>
      </button>
    </form>
  );
};

export default AddTask;
