import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoDelete = () => {
  const [id, setId] = useState("");

  const handleDeleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:4000/todo/${id}`);
      toast.success("TODO deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {}
  };

  return (
    <div className="todo-delete">
      <h2 className="m-5">Delete Task</h2>
      <br></br>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="ID-ul task-ului"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <br></br>
      <button className="btn btn-danger" onClick={handleDeleteTodo}>
        Delete
      </button>
      <ToastContainer />
    </div>
  );
};

export default TodoDelete;