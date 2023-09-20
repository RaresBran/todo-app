import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/todo");
        setTodos(response.data);
      } catch (error) {}
    };

    fetchTodos();
  }, []);

  const handleCheckboxChange = async (id, title, description, done) => {
    try {
      await axios.post(`http://localhost:4000/todo/${id}`, {
        id,
        title,
        description,
        done: !done,
      });
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, done: !done } : todo
      );
      setTodos(updatedTodos);
    } catch (error) {}
  };

  return (
    <div className="todo-list">
      <h2 className="m-5">All Tasks</h2>
      <br></br>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`list-group-item ${
              todo.done ? "completed" : ""
            }`}
          >
            <h3>
              {todo.title} (ID: {todo.id})
            </h3>
            <p>{todo.description}</p>
            <p>Completed: {todo.done ? "Yes" : "No"}</p>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`checkbox-${todo.id}`}
                checked={todo.done}
                onChange={() =>
                  handleCheckboxChange(
                    todo.id,
                    todo.title,
                    todo.description,
                    todo.done
                  )
                }
              />
              <label
                className="form-check-label"
                htmlFor={`checkbox-${todo.id}`}
              ></label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
