import { useState } from "react";
import { addTodo,   setTodos } from "./reduxx";
import { connect } from "react-redux";
import {v1 as uuid} from "uuid";

const InputTodo = (todos) => {
    const [inputTodos, setTodos] = useState({          
      id: '',
      content: '',
      done: ''
    });

    const handleSubmit = (e) => {
        e && e.preventDefault();
        if(inputTodos !== '') {
          todos.addTodo(inputTodos);
          return (
            setTodos(inputTodos)
          );
        }
    };

    const handleTodoChange = (e) => {
        e.persist();
        setTodos(inputTodos => ({
            ...inputTodos,
            id: uuid(),
            [e.target.name]: e.target.value,
            done: false
        }));
    }

    return (
      <div className="container">
        <br/>
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="todo"
        required={true}
        name="content"
        value={inputTodos.content}
        onChange={handleTodoChange}
        />
        <button type="submit">+</button>
        </form>
        </div>
      );
    };

            
      export default connect(undefined,
        { addTodo, setTodos })(InputTodo);