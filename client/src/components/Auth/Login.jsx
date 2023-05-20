import axios from 'axios';
import React, { useState } from 'react';
import { isEmpty } from "../../utils";

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState();

  const loginHandle = (event) => {
    event.preventDefault();

    axios({
      method:"post",
      withCredentials:true,
      url: `${process.env.REACT_APP_API_URL}/auth/login`,
      data : {
        log: username,
        password: password 
      }
    }).then((res) => {
      if (res.data.errors)
        setErrors(res.data.errors);
      else 
        window.location = '/';
    }).catch((err) =>  console.log(err));
  }
  
  return (
    <div className='login-container'>
      <div className="content">
        <form className='form' onSubmit={(e) => loginHandle(e)}>
          <div className="field">
            <label className="label">Username / Email</label>
            {!isEmpty(errors) && !isEmpty(errors.logs) && (
              <p>{errors.logs}</p>
            )}
            <div className="control">
              <input className={!isEmpty(errors) && !isEmpty(errors.logs) ? "input is-danger" : "input is-info"} type="text" name="unsername" id="username" onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            {!isEmpty(errors) && !isEmpty(errors.password) && (
              <p>{errors.password}</p>
            )}
            <div className="control">
              <input className={!isEmpty(errors) && !isEmpty(errors.password) ? "input is-danger" : "input is-info"} type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
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
