import TodoItem from "./TodoItem";

function TodoList({
  todos,
  updateTodo,
  deleteTodo,
  toggleComplete,
  editingId,
  setEditingId,
}) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">No todos yet. Add one to get started!</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              isEditing={editingId === todo.id}
              setEditingId={setEditingId}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
