import { combineReducers } from "redux";
import { createStore } from 'redux';



//initial state 
const initialTodos = [
  {
      id: 1,
      content: 'to do',
      done:false
  },
  {
      id: 2,
      content: 'done to do',
      done:true
  },
  {
      id: 3,
      content: 'not yet',
      done:false
  },
  {
      id: 4,
      content: 'ive done this',
      done:true
  }
];

//actions
export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: {todo}
});

export const deleteTodo = (todo) => ({
  type: "DELETE_TODO",
  payload: {todo}
});

export const doneTodo = (todo) => ({
  type: "DONE_TODO",
  payload: {todo}
});

export const setTodos = (todos) => ({
  type: "SET_TODOS",
  payload: {todos}
});

//reducer
const reducer = (todos = initialTodos, action) => {
    switch (action.type) {

      case "SET_TODOS":
        return action.payload.todos;

      case "ADD_TODO":
        return [...todos, action.payload.todo];

      case "DELETE_TODO":
        let newTodos = [...todos];
        newTodos.splice(todos.indexOf(action.payload.todo),1);
        return newTodos;

      case "DONE_TODO":
        if (action.payload.todo.done === true){
        action.payload.todo.done = false ;
      } else {
        action.payload.todo.done = true ;
      }
        return [...todos, action.payload.todo];

      default:
        return todos;
    }
  };


//combined reducers
 let reducers =  combineReducers({
  todos: reducer
});

//creating store
const store = createStore(reducers);


export default store;