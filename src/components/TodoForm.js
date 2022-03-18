export const TodoForm = ({handleSubmit, value, updateValue}) => {
  return (
    <label>
      <input
        type={"text"}
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Добавить</button>
    </label>
  );
};