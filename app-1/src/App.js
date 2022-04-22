import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [usrInput, setUserInput] = useState('');
  return (
    <div className="App">
      <h1>App 1</h1>
      <input onChange={e => {setUserInput(e.target.value)}}></input>
      <p>{usrInput}</p>
    </div>
  );
}

export default App;
