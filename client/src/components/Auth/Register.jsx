import axios from 'axios';
import React, { useState } from 'react'

export default function Register() {

  const [state, setState] = useState({email: "", username: "", password: ""});

  const registerHandle = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      withCredentials: true,
      url: `${process.env.REACT_APP_API_URL}/auth/register`,
      data:{
        state
      }
    })

  }

  return (
    <div className='register-container'>
      <div className="content">
        <form className="form" onSubmit={(e) => registerHandle(e)}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input type="email" name="email" id="email" className="input is-info" onChange={(e) => setState({...state, email:e.target.value})}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input type="text" name="username" id="username" className="input is-info" onChange={(e) => setState({...state, username:e.target.value})}/>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input type="password" name="password" id="password" className="input is-info" onChange={(e) => setState({...state, password:e.target.value})}/>
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
