import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/TodoItemContext";

const TodoList = () => {
    const {items} = useContext(TodoItemContext);
    
    return <>
        {items.map((item) => (
            <TodoItem  key={item.name} name={item.name} 
            date={item.date}>
            </TodoItem>
        ))} 
    </>
}

export default TodoList;