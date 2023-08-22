import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TaskContext } from "../context/TaskContext";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const EditTask = ({ element }) => {
  const { editItem } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    editItem({
      title: title,
      description: description,
      id: element.id,
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

  useEffect(() => {
    setTitle(element.title);
    setDescription(element.description);
  }, [element]);
  return (
    <form className="p-5 my-3 border" onSubmit={handleSubmit}>
      <h2 className="text-center display-6">Edit Task</h2>
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
        <p style={{ color: "white", margin: 0 }}>
          Edit <FontAwesomeIcon icon={faPen} className="ms-2" />
        </p>
      </button>
    </form>
  );
};

export default EditTask;
