import "./App.css";
import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todoSlice";

function App() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  return (
    <div className="page">
      <h1>Введите текст чтобы добавить его в список дел</h1>
      <TodoForm
        value={text}
        updateValue={setText}
        handleSubmit={handleSubmit}
      />

      <TodoList />
    </div>
  );
}

export default App;
