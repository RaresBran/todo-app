import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoDelete from "./components/DeleteForm";
import TodoView from "./components/ViewTodo";
import Navigation from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/add" element={<TodoForm />} />
          <Route path="/view" element={<TodoView />} />
          <Route path="/delete" element={<TodoDelete />} />
          <Route path="/" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;