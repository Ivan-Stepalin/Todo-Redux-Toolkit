import {useDispatch, useSelector} from "react-redux";
import {removeTodo, toggleTodoStatus} from "../redux/todoSlice";

export const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos.todos);

    console.log(todos)

    return (
        todos.length > 0 && (
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type={"checkbox"}
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodoStatus({id: todo.id}))}
                        />
                        <span>{todo.text}</span>
                        <span onClick={() => dispatch(removeTodo({id: todo.id}))}>&times;</span>
                    </li>
                ))}
            </ul>
        )
    );
};
