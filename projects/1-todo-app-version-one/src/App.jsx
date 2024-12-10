import "./App.css";
import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoList1 from "./components/TodoList1";
import TodoList2 from "./components/TodoList2";

function App() {
  return (
    <center className="todo-container">
        <TodoName></TodoName>
        <AddTodo></AddTodo>
        <TodoList1></TodoList1>
        <TodoList2></TodoList2>
    </center>
  );
}

export default App;
