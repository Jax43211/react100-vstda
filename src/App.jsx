import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const addTodo = (text, priority) => {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      priority,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, text, priority) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: text.trim(), priority } : todo
      )
    );
    setEditingId(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Very Simple Todo App</h1>
        <p className="subtitle">Track all of the things.</p>
      </header>

      <div className="app-content">
        <div className="form-section">
          <div className="card">
            <h2>Add New Todo</h2>
            <TodoForm addTodo={addTodo} />
          </div>
        </div>

        <div className="list-section">
          <div className="card">
            <h2>View Todos</h2>
            <TodoList
              todos={todos}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              editingId={editingId}
              setEditingId={setEditingId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
