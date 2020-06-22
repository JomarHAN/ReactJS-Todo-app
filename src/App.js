import React, { useState , useEffect} from 'react';
import './App.css';
import Todo from './todo'
import db from './firebase'

function App() {
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    console.log('I ran to the component loaded')

    db.collection('todos').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => doc.data().title))
    })
  },[])


  const addTodo = (e)=>{
    e.preventDefault()
    // setTodos([...todos,input]);
    db.collection('todos').add({
      title: input
    })
    setInput("")

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
