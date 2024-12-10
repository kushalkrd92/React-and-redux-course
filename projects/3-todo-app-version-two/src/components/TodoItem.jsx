import styles from "./TodoItem.module.css";

const TodoItem = ({ names, dates }) => {
  return (
      <div class="container k-row">
        <div class="row">
          <div class={`col-6 ${styles["todoText"]}`}>{names}</div>
          <div class={`col-4 ${styles["todoText"]}`}>{dates}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger k-button">
              Delete
            </button>
          </div>
        </div>
      </div>
  );
};

export default TodoItem;
