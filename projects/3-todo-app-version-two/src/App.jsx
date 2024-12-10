import "./App.css";
import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const items = [
    {
      names: "Buy Milk",
      dates: "14/11/24"
    },
    {
      names: "Go to College",
      dates: "14/11/24"
    }
  ]

  return (
    <center className="todo-container">
        <TodoName></TodoName>
        <AddTodo></AddTodo>
        <TodoList items={items}></TodoList>
    </center>
  );
}

export default App;
