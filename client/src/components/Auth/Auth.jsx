import React from 'react'
import Register from './Register'
import Login from './Login'

export default function Auth() {
  return (
    <div className='auth-container container'>
        <Register />
        <Login />
    </div>
  )
}
