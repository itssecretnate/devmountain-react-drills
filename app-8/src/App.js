import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'

function App() {

  const [apiRequest, setApiRequest] = useState([]);

  useEffect(() => {

    axios.get('https://pokeapi.co/api/v2/pokemon/pikachu').then(res => { 
      setApiRequest(res.data)
    })

  })

  return (
    <div className="App">
      <h1>{apiRequest.name}</h1>
      <img src={apiRequest.sprites.front_default}></img>
    </div>
  );
}

export default App;
