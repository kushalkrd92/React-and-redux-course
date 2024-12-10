import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div class="container text-center k-row">
      <div class="row">
        <div class="col-6">
          <input type="text" class={styles['todoName']} placeholder="Enter Todo Here" />
        </div>
        <div class="col-4">
          <input type="date" class={styles['todoName']}/>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success k-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
