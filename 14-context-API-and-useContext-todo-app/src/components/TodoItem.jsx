import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemContext } from "../store/TodoItemContext";

const TodoItem = ({names, dates}) => {
  const {deleteItem} = useContext(TodoItemContext);

  return (
      <div className="container k-row">
        <div className="row">
          <div className={`col-6 ${styles["todoText"]}`}>{names}</div>
          <div className={`col-4 ${styles["todoText"]}`}>{dates}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger k-button" 
            onClick={() => deleteItem(names)}>
              <MdDelete className={styles.delete}/>
            </button>
          </div>
        </div>
      </div>
  );
};

export default TodoItem;
