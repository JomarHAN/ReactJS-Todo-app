import React, { useState } from 'react';
import './App.css';
import Todo from './todo'

function App() {
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);


  const addTodo = (e)=>{
    e.preventDefault()
    setTodos([...todos,input]);
    setInput("")

    console.log([...todos,input])
  }
  return (
    <div className="App">
        <h1>Todo App</h1>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
          <button disabled={!input} onClick={addTodo}>Add Todo</button>
          {todos.map((todo,i)=>(
            <Todo title={todo} key={i}/>
          ))}
        </form>
        
    </div>
  );
}

export default App;
