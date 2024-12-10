import "./App.css";
import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {

  const [items, setItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // functional updates
    
    setItems((currValue) => [
      ...currValue, {names: itemName, dates: itemDueDate}
    ])

    // setItems((currValue) => {
    //   const newTodoItems = [...currValue, {names: itemName, dates:itemDueDate}]
    //   return newTodoItems;
    // })
  }

  const handleDeleteButton = (todoItemName) => {
      const newTodoItems1 = items.filter((item) => item.names !== todoItemName);
      setItems(newTodoItems1);
  }
  
  return (
    <center className="todo-container">
        <TodoName></TodoName>
        <AddTodo handleNewItem={handleNewItem}></AddTodo>
        {items.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoList items={items} handleDeleteButton={handleDeleteButton}></TodoList>
    </center>
  );
}

export default App;
