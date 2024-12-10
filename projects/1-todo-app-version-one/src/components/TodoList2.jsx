function TodoList2() {
    let todoItem = 'Go to College'
    let todoDate = '14/11/24'

    return <div class="container k-row">
    <div class="row">
      <div class="col-6 text">{todoItem}</div>
      <div class="col-4 text">{todoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger 
k-button">
          Delete
        </button>
      </div>
    </div>
    </div>
}

export default TodoList2;
