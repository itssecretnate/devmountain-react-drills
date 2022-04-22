import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';

function App() {
  const [dataArr, setDataArr] = useState([
    'spaghetti',
    'ice cream',
    'sushi',
    'bologna',
    'cheese',
  ]);

  return (
    <div className="App">
      <div>
      {dataArr.map((data, index) => <h2 key={index}>{data}</h2>)}
      </div>
    </div>
  );
}

export default App;
