import "./App.css";
import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemContext } from "./store/TodoItemContext";

function App() {

  const [items, setItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setItems((currValue) => [
      ...currValue, {names: itemName, dates: itemDueDate}
    ])
  }

  const deleteItem = (todoItemName) => {
      const newTodoItems1 = items.filter((item) => item.names !== todoItemName);
      setItems(newTodoItems1);
  }
  
  return (
    <TodoItemContext.Provider value={{items, addNewItem, deleteItem}}>
    <center className="todo-container">
        <TodoName></TodoName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoList></TodoList>
    </center>
    </TodoItemContext.Provider>
  );
}

export default App;
