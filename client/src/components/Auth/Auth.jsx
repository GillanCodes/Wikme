import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'

export default function Auth() {

  const [tab, setTab] = useState(0);

  return (
    <div className='auth-container container'>
      <h1 className='title'>Auth</h1>
      <div className="content">
        <div className="tabs">
          <p className={tab == 0 ? "tab active" : "tab"} onClick={() => setTab(0)}>Login</p>  
          <p className={tab == 1 ? "tab active" : "tab"} onClick={() => setTab(1)}>Register</p>
        </div>  
      </div> 

      {tab == 0 && (
        <Login />
      )}

      {tab == 1 && (
        <Register />
      )}
    </div>
  )
}
