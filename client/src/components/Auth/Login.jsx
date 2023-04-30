import axios from 'axios';
import React, { useState } from 'react'

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandle = () => {
    axios({
      method:"post",
      withCredentials:true,
      url: `http://localhost:5050/api/auth/login`,
      data : {
        log: username,
        password: password 
      }
    }).then((res) => {
      window.location = '/';
    }).catch((err) =>  console.log(err));
  }
  
  return (
    <div className='login-container'>
      <input type="text" name="unsername" id="username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => loginHandle()}>Login</button>
    </div>
  )
}
