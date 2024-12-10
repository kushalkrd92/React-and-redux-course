import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/TodoItemContext";

const TodoList = () => {
    const {items} = useContext(TodoItemContext);
    
    return <>
        {items.map((item) => (
            <TodoItem  key={item.names} names={item.names} 
            dates={item.dates}>
            </TodoItem>
        ))} 
    </>
}

export default TodoList;