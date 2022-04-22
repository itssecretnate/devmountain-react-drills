import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();
    alert(`Username: ${userName} || Password: ${password}`);
  }

  return (
    <div className="App">
      <input placeholder='Username' onChange={e => setUsername(e.target.value)}></input>
      <input placeholder='Password' onChange={e => setPassword(e.target.value)}></input>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
