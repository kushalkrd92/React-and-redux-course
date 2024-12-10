import { createContext, useReducer } from "react";

export const TodoItemContext = createContext({
    items: [],
    addNewItem: () => {},
    deleteItem: () => {}
});

const itemReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if(action.type === 'NEW_ITEM'){
      newTodoItems = [
        ...currTodoItems, 
        {name: action.payload.itemName, 
         date: action.payload.itemDueDate}
      ]
    }
    else if(action.type === 'DELETE_ITEM'){
      newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName);
    }
    return newTodoItems;
}

const TodoItemsContextProvider = ({children}) => {
  const [items, dispatchItems] =  useReducer(itemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: 'NEW_ITEM',
      payload: {
        itemName,
        itemDueDate
      }
    }
    dispatchItems(newItemAction);
  }

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: 'DELETE_ITEM',
      payload: {
        itemName: todoItemName
      }
    }
    dispatchItems(deleteItemAction);
  }
    return <TodoItemContext.Provider value={{items, addNewItem, deleteItem}}>
        {children}
    </TodoItemContext.Provider>
}

export default TodoItemsContextProvider;
