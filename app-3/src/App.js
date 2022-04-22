import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';

function App() {
  const [inputString, setInputString] = useState('');
  const [dataArr, setDataArr] = useState([
    'spaghetti',
    'ice cream',
    'sushi',
    'bologna',
    'cheese',
  ]);

  const filterData = () => (
    dataArr.map((element, index) => element.includes(inputString) ? <h2 key={index}>{element}</h2> : '')
  )

  return (
    <div className="App">
        <input onChange={e => setInputString(e.target.value)}></input>
      <div>
      {filterData()}
      </div>
    </div>
  );
}

export default App;
