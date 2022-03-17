export const TodoList = ({ todos, toggleTodoStatus, removeTodo }) => {
  return (
    todos.length > 0 && (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type={"checkbox"}
              checked={todo.completed}
              onClick={() => toggleTodoStatus(todo.id)}
            />
            <span>{todo.text}</span>
            <span onClick={() => removeTodo(todo.id)}>&times;</span>
          </li>
        ))}
      </ul>
    )
  );
};
