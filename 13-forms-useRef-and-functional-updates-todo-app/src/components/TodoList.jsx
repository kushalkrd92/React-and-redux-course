import TodoItem from "./TodoItem";

const TodoList = ({items, handleDeleteButton}) => {
    return <>
        {items.map((item) => (
            <TodoItem  key={item.names} names={item.names} dates={item.dates} handleDeleteButton={handleDeleteButton}></TodoItem>
        ))} 
    </>
}

export default TodoList;