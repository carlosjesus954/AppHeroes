import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const navigate = useNavigate()
  const onLogin = () =>{
    navigate('/marvel', {
      replace: true
    })
  }
  return (
    <div className='Login'>
      <h1 className="Login-h1">Login</h1>
      <button className="Login-btn" onClick={onLogin} >Login</button>
    </div>
  )
}
