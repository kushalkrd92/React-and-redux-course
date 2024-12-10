import styles from "./AddTodo.module.css";
import { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";

function AddTodo({handleNewItem}) {

  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');
  
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  }
  
  const handleButtonClicked = () => {
    handleNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }

  return (
    <div className="container text-center k-row">
      <div className="row">
        <div className="col-6">
          <input type="text" className={styles['todoName']} placeholder="Enter Todo Here" onChange={handleNameChange} value={todoName}/>
        </div>
        <div className="col-4">
          <input type="date" className={styles['todoName']} 
          onChange={handleDateChange} value={dueDate}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success k-button" 
          onClick={handleButtonClicked}>
            <AiOutlineFileAdd className={styles.add} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
