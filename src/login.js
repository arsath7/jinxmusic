import PropTypes from 'prop-types';
import { useState } from 'react';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({setToken}) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
  
  return(
    <div className="login-wrapper">
    <h1 className='welcome'>Welcome to JINX</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p className='username'>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)} />
      </label>
      <label>
        <p className='password'>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div className='loginbtn'>
        <button type="submit" classNmae='loginn'>Login</button>
      </div>
    </form>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }