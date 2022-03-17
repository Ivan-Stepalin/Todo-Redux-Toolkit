export const TodoForm = ({addTodos, text, setText}) => {
  return (
    <label>
      <input
        type={"text"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodos}>Добавить</button>
    </label>
  );
};