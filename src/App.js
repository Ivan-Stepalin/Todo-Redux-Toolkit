import "./App.css";
import { useState } from "react";
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodos = () => {
    setTodos([
      ...todos,
      { id: new Date().toISOString(), text, completed: false },
    ]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoStatus = (id) => {
    setTodos(todos.map((todo) => {
      if(todo.id !== id) return todo

      return {...todo, completed: !todo.completed}
    }));
  };

  return (
    <div className="page">
      <h1>Введите текст чтобы добавить его в список дел</h1>
      <TodoForm text={text} addTodos={addTodos} setText={setText} />

     <TodoList removeTodo={removeTodo} toggleTodoStatus={toggleTodoStatus} todos={todos}/>
    </div>
  );
}

export default App;
