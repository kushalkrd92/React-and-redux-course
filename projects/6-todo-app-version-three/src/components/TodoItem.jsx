import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ names, dates, handleDeleteButton }) => {
  return (
      <div className="container k-row">
        <div className="row">
          <div className={`col-6 ${styles["todoText"]}`}>{names}</div>
          <div className={`col-4 ${styles["todoText"]}`}>{dates}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger k-button" 
            onClick={() => handleDeleteButton(names)}>
              <MdDelete className={styles.delete}/>
            </button>
          </div>
        </div>
      </div>
  );
};

export default TodoItem;
