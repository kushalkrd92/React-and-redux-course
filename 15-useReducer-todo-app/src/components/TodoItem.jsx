import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemContext } from "../store/TodoItemContext";

const TodoItem = ({name, date}) => {
  const {deleteItem} = useContext(TodoItemContext);

  return (
      <div className="container k-row">
        <div className="row">
          <div className={`col-6 ${styles["todoText"]}`}>{name}</div>
          <div className={`col-4 ${styles["todoText"]}`}>{date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger k-button" 
            onClick={() => deleteItem(name)}>
              <MdDelete className={styles.delete}/>
            </button>
          </div>
        </div>
      </div>
  );
};

export default TodoItem;
