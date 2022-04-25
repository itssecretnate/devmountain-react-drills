import './App.css';
import React, {useState} from 'react';
import NewTask from './components/NewTask';
import List from './components/List';

function App() {

  const [todoList, setTodoList] = useState([]);


  function addTodoItem(itemToAdd) {

    itemToAdd = itemToAdd.trim();

    itemToAdd !== '' && setTodoList([...todoList, itemToAdd]);

  }


    return (
      <div className="App">
        <h1>Todo List</h1>
        <NewTask addTodoItem={addTodoItem}/>
        <List todoList={todoList}/>
      </div>
    );
}

export default App;
