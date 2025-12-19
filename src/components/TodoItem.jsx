import { useState } from "react";

function TodoItem({
  todo,
  updateTodo,
  deleteTodo,
  toggleComplete,
  isEditing,
  setEditingId,
}) {
  const [editText, setEditText] = useState(todo.text);
  const [editPriority, setEditPriority] = useState(todo.priority);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editText.trim() !== "") {
      updateTodo(todo.id, editText, editPriority);
    }
  };

  const priorityClass = `priority-${
    todo.priority === "1" ? "high" : todo.priority === "2" ? "medium" : "low"
  }`;

  if (isEditing) {
    return (
      <li
        className={`todo-item ${priorityClass} editing-mode`}
        data-testid="todo-item"
      >
        <form onSubmit={handleEditSubmit} className="edit-form">
          <div className="form-group">
            <label htmlFor={`update-todo-text-${todo.id}`}>Description</label>
            <textarea
              id={`update-todo-text-${todo.id}`}
              data-testid="update-todo-text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor={`update-todo-priority-${todo.id}`}>Priority</label>
            <select
              id={`update-todo-priority-${todo.id}`}
              data-testid="update-todo-priority"
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value)}
            >
              <option value="1">High</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </select>
          </div>

          <div className="edit-actions">
            <button
              type="submit"
              data-testid="update-todo"
              className="btn btn-success"
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setEditText(todo.text);
                setEditPriority(todo.priority);
                setEditingId(null);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </li>
    );
  }

  return (
    <li className={`todo-item ${priorityClass}`} data-testid="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="todo-checkbox"
        />
        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
      </div>

      <div className="todo-actions">
        <a
          href="#"
          data-testid="edit-todo"
          className="btn-link edit-link"
          onClick={(e) => {
            e.preventDefault();
            setEditingId(todo.id);
          }}
        >
          Edit
        </a>
        <a
          href="#"
          data-testid="delete-todo"
          className="btn-link delete-link"
          onClick={(e) => {
            e.preventDefault();
            deleteTodo(todo.id);
          }}
        >
          Delete
        </a>
      </div>
    </li>
  );
}

export default TodoItem;
