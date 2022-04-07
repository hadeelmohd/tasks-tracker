import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import './App.css';
import { Component } from "react";

class App extends Component {
  render() {
  return (
<main className='container'>
  <InputTodo/> 
  <TodoList/>
</main>
  );
}
}

export default App;