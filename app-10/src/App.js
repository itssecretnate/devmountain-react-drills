import logo from './logo.svg';
import './App.css';

import {Link, Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='product'>Products</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
