import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    try {
      const newTodo = {
        title,
        description,
        done: false,
      };

      await axios.post("http://localhost:4000/todo", newTodo);
      toast.success("TODO added successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {}
  };

  return (
    <div className="todo-form">
      <h2 className="m-5">Add New Task</h2>
      <br></br>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Titlu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br></br>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Descriere"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <br></br>
      <button className="btn btn-primary" onClick={handleAddTodo}>
        Add
      </button>
      <ToastContainer />
    </div>
  );
};

export default TodoForm;