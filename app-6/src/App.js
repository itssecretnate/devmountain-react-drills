import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import React, {useEffect, useState} from 'react';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [itemInput, setItemInput] = useState('');

  const addTodoItem = (event) => {
    event.preventDefault();

    setTodoList([
      ...todoList, itemInput
    ]);

    setItemInput('');
  }

  return (
    <div className="App">
      <form onSubmit={addTodoItem}>
        <input type='text' onChange={e => setItemInput(e.target.value)}></input>
        <button onSubmit={addTodoItem}>Add</button>
      </form>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
