import { useEffect} from "react";
import { connect } from "react-redux";
import { deleteTodo, doneTodo, setTodos } from "./reduxx";

const TodoList = props => {
  
const { todos, deleteTodo, doneTodo, setTodos } = props;

function handleDelete (e, todo) {
    e.stopPropagation();
    deleteTodo(todo);
}

function handleChecked (e, todo) {
  e.preventDefault();
    doneTodo(todo);
    console.log(todos);
    return setTodos(todos);
  }

    const updateList = () => {

        return (
          <>
          <h1>TODO</h1>
          <div>{     
          todos.map((todo, id) => (
                   (todo.done === false) ?     
                   <span key={id}>
                   <input type="checkbox" className="checkboxi" name="todo" key={todo.id} value={todo.content} 
                   onChange={e => handleChecked(e,todo)}></input>
                   <label>{todo.content}</label>
                   <button 
                   onClick={e => handleDelete(e, todo)}>x</button>
                   <br/>
                   </span> : null
                        
              ))}
          </div>
          
          <div>
              <h1>DONE</h1>
              {     
          todos.map((todo, id) => (
                   (todo.done === true) ?     
                   <span key={id}>
                   <input type="checkbox" className="checkboxi" name="todo" key={todo.id} value={todo.content} 
                   onChange={e => handleChecked(e,todo)} checked></input>
                   <label>{todo.content}</label>
                   <button 
                   onClick={e => handleDelete(e, todo)}>x</button>
                   <br/>
                   </span> : null
                        
              ))}
          </div>
          </>
          );
      }

      
      return updateList();
}



const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}




export default connect(
  mapStateToProps,
  {deleteTodo, doneTodo, setTodos})(TodoList);