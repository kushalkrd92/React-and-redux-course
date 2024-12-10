import styles from "./AddTodo.module.css";
import { useRef } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";

function AddTodo({handleNewItem}) {

  const todoNameElement = useRef();
  const dueDateElement = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    handleNewItem(todoName, dueDate);
    todoNameElement.current.value = '';
    dueDateElement.current.value = '';
  }

  return (
    <div className="container text-center k-row">
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-6">
          <input type="text" className={styles['todoName']} 
            ref={todoNameElement} placeholder="Enter Todo Here" />
        </div>

        <div className="col-4">
          <input type="date" className={styles['todoName']} 
          ref={dueDateElement} />
        </div>

        <div className="col-2">
          <button className="btn btn-success k-button" >
            <AiOutlineFileAdd className={styles.add} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
