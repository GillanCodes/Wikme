import axios from 'axios';
import React, { useState } from 'react'

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandle = (event) => {
    event.preventDefault();

    axios({
      method:"post",
      withCredentials:true,
      url: `${process.env.REACT_APP_API_URL}api/auth/login`,
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
      <div className="content">
        <form className='form' onSubmit={(e) => loginHandle(e)}>
          <div className="field">
            <label className="label">Username / Email</label>
            <div className="control">
              <input className='input' type="text" name="unsername" id="username" onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className='input' type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <button className="button" onClick={(e) => loginHandle(e)}>Login</button>
          </div>
        </form>
     </div>
   </div>
  )
}
