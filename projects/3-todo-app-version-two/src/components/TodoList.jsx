import TodoItem from "./TodoItem";

const TodoList = ({items}) => {
    return <>
        {items.map((item) => (
            <TodoItem names={item.names} dates={item.dates}></TodoItem>
        ))} 
    </>
}

export default TodoList;