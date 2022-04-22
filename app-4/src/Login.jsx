import React, {useState} from 'react';

function Login() {

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();
    alert(`Username: ${userName} || Password: ${password}`);
  }

  return (
    <form className="loginForm">
      <input placeholder='Username' onChange={e => setUsername(e.target.value)}></input>
      <input placeholder='Password' onChange={e => setPassword(e.target.value)}></input>
      <button onClick={login}>Login</button>
    </form>
  );
}

export default Login;