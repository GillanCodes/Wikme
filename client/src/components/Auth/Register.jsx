import axios from 'axios';
import React, { useState } from 'react';
import { isEmpty } from '../../utils';

export default function Register() {

  const [state, setState] = useState({email: "", username: "", password: ""});
  const [errors, setErrors] = useState();

  const registerHandle = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      withCredentials: true,
      url: `${process.env.REACT_APP_API_URL}/auth/register`,
      data:{
        email: state.email,
        username: state.username,
        password: state.password
      }
    }).then((res) => {
      if (res.data.errors) 
        setErrors(res.data.errors);
      else
        window.location = window.location;
    })

  }

  return (
    <div className='register-container'>
      <div className="content">
        <form className="form" onSubmit={(e) => registerHandle(e)}>
          <div className="field">
            <label className="label">Email</label>
            {!isEmpty(errors) && !isEmpty(errors.email) && (
              <p>{errors.email}</p>
            )}
            <div className="control">
              <input type="email" name="email" id="email" className={!isEmpty(errors) && !isEmpty(errors.email) ? "input is-danger" : "input is-info"} onChange={(e) => setState({...state, email:e.target.value})}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Username</label>
            {!isEmpty(errors) && !isEmpty(errors.username) && (
              <p>{errors.username}</p>
            )}
            <div className="control">
              <input type="text" name="username" id="username" className={!isEmpty(errors) && !isEmpty(errors.username) ? "input is-danger" : "input is-info"} onChange={(e) => setState({...state, username:e.target.value})}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            {!isEmpty(errors) && !isEmpty(errors.password) && (
              <p>{errors.password}</p>
            )}
            <div className="control">
              <input type="password" name="password" id="password" className={!isEmpty(errors) && !isEmpty(errors.password) ? "input is-danger" : "input is-info"} onChange={(e) => setState({...state, password:e.target.value})}/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-info">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
