import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text, priority);
    setText("");
    setPriority("1");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <label htmlFor="create-todo-text">I want to..</label>
        <textarea
          id="create-todo-text"
          data-testid="create-todo-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your todo..."
          rows="4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="create-todo-priority">
          How much of a priority is this?
        </label>
        <select
          id="create-todo-priority"
          data-testid="create-todo-priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>
      </div>

      <button
        type="submit"
        data-testid="create-todo"
        className="btn btn-primary"
      >
        + Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
