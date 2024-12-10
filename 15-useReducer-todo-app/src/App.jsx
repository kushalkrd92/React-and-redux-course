import "./App.css";
import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/TodoItemContext";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <TodoName></TodoName>
        <AddTodo></AddTodo>
        <WelcomeMessage />
        <TodoList></TodoList>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
